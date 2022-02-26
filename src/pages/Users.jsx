import React from "react";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";
import FormComponent from "../components/Form";
import TableComponent from "../components/TableComponent";
import ModificationForm from "../components/ModificationForm";
import { Button } from "react-bootstrap";
import {
  modalData,
  formData,
  tableData,
  modalUpdate,
  modalDelete,
  formUpdateData,
  formDeleteData,
} from "../utils/UsersData";

const Users = () => {
  const [stateModalCreate, setModalCreate] = React.useState(false);
  const [stateModalUpdate, setModalUpdate] = React.useState(false);
  const [stateModalDelete, setModalDelete] = React.useState(false);

  const formAux = () => {
    return <FormComponent formData={formData} />;
  };
  const formUpdate = () => {
    return <ModificationForm formData={formUpdateData} />;
  };
  const formDelete = () => {
    return <ModificationForm formData={formDeleteData} />;
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
      {/* Update */}
      <Button
        //disabled={props.loading === true}
        variant={modalUpdate.variantButtom}
        onClick={() => setModalUpdate(!stateModalUpdate)}
      >
        {modalUpdate.title}
      </Button>
      <ModalComponent
        modalData={modalUpdate}
        body={formUpdate}
        state={stateModalUpdate}
        setState={setModalUpdate}
      />
      {/* Delete */}
      <Button
        //disabled={props.loading === true}
        variant={modalDelete.variantButtom}
        onClick={() => setModalDelete(!stateModalDelete)}
      >
        {modalDelete.title}
      </Button>
      <ModalComponent
        modalData={modalDelete}
        body={formDelete}
        state={stateModalDelete}
        setState={setModalDelete}
      />

      <TableComponent tableData={tableData} />
    </>
  );
};

export default Users;
