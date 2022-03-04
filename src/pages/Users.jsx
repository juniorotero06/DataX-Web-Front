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
} from "../utils/UsersData";

import { connect } from "react-redux";

const Users = (props) => {
  const [stateModalCreate, setModalCreate] = React.useState(false);
  const [stateModalUpdate, setModalUpdate] = React.useState(false);

  const [page, setPage] = React.useState(0);

  tableData.url = `http://localhost:3001/api/users?page=${page}&size=10`;

  const tableSearch = {
    url: `http://localhost:3001/api/user?search=${props.onSearch.search}`,
    basicUrl: `http://localhost:3001/api/users?page=${page}&size=10`,
  };

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
  React.useState(() => {
    console.log("onSearch: ", props.onSearch);
  }, []);
  return (
    <>
      <Sidebar />
      <SearchBar tableSearch={tableSearch} />
      {/* Create */}
      <hr />
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
    onSearch: state.onSearch,
  };
}

export default connect(mapStateToProps)(Users);
