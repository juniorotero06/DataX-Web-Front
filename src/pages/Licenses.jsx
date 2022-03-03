import React from "react";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";
import FormComponent from "../components/Form";
import TableComponent from "../components/TableComponent";
import ButtonTable from "../components/ButtonTable";
import SearchBar from "../components/SearchBar";
import { Button } from "react-bootstrap";
import {
  modalData,
  formData,
  tableData,
  modalUpdate,
  formUpdateData,
} from "../utils/LicensesData";

import { connect } from "react-redux";

const Licenses = (props) => {
  const [stateModalCreate, setModalCreate] = React.useState(false);
  const [stateModalUpdate, setModalUpdate] = React.useState(false);

  const [page, setPage] = React.useState(0);

  tableData.url = `http://localhost:3001/api/licenses?page=${page}&size=10`;

  formUpdateData.initialValues = {
    companyName: props.values.companyName,
    address: props.values.address,
    email: props.values.email,
    phone: props.values.phone,
    host: props.values.host,
    bdUser: props.values.bdUser,
    bdName: props.values.bdName,
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
      <SearchBar />
      {/* Create */}
      <Button
        disabled={props.loading === true}
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

      <ButtonTable
        disabled={props.loading === true}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
function mapStateToProps(state) {
  return {
    values: state.values,
    loading: state.loading,
  };
}

export default connect(mapStateToProps)(Licenses);
