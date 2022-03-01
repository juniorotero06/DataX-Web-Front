import React from "react";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";
import FormComponent from "../components/Form";
import TableComponent from "../components/TableComponent";
import { Button } from "react-bootstrap";
import {
  modalData,
  formData,
  tableData,
  modalUpdate,
  formUpdateData,
} from "../utils/UsersData";

import { connect } from "react-redux";

const Users = (props) => {
  const [stateModalCreate, setModalCreate] = React.useState(false);
  const [stateModalUpdate, setModalUpdate] = React.useState(false);

  formUpdateData.initialValues = {
    name: props.values.name,
    lastname: props.values.lastname,
    email: props.values.email,
  };

  const formAux = () => {
    return <FormComponent formData={formData} />;
  };
  const formUpdate = () => {
    return <FormComponent formData={formUpdateData} />;
  };

  return (
    <>
      <Sidebar />

      {/* Create */}
      <Button
        //disabled={props.loading === true}
        variant={modalData.variantButtom}
        onClick={() => setModalCreate(!stateModalCreate)}
      >
        {modalData.title}
      </Button>
      <ModalComponent
        modalData={modalData}
        body={formAux}
        state={stateModalCreate}
        setState={setModalCreate}
      />
      <TableComponent
        modalData={modalUpdate}
        tableData={tableData}
        formData={formUpdate}
        formUpdateData={formUpdateData}
        state={stateModalUpdate}
        setState={setModalUpdate}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    values: state.values,
  };
}

export default connect(mapStateToProps)(Users);
