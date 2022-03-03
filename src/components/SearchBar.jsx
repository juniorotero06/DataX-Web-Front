import React from "react";
import { connect } from "react-redux";
import { onSearch } from "../redux/actions";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import SimpleTable from "../components/SimpleTable";

export function SearchBar({ setModal, stateModal, ...props }) {
  const tableAux = () => {
    return <SimpleTable tableData={props.tableSearch} />;
  };

  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={async (values) => {
          setModal(!stateModal);
          props.onSearch(values);
        }}
      >
        <Form>
          <Field name="search" type="text" />
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
      </Formik>
      <ModalComponent
        modalData={props.modalSearch}
        body={tableAux}
        state={stateModal}
        setState={setModal}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (payload) => dispatch(onSearch(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
