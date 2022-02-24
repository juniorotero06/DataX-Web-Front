import React from "react";
import UsersTable from "../components/UsersTable";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";
import FormComponent from "../components/Form";

import {formData, modalData} from "../utils/UsersData"

const Users = () => {

  const formAux = () => {
    return <FormComponent formData={formData}/>;
  };

  return (
    <>
      <Sidebar />
      <ModalComponent modalData={modalData} body={formAux} />
      <UsersTable />
    </>
  );
};

export default Users;
