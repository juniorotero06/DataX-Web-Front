import React from "react";
import LicensesTable from "../components/LicensesTable";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";
import FormComponent from "../components/Form";

import { modalData, formData } from "../utils/LicensesData";

const Licenses = () => {
  
  const formAux = () => {
    return <FormComponent formData={formData}/>;
  };
  
  return (
    <>
      <Sidebar />
      <ModalComponent modalData={modalData} body={formAux} />
      <LicensesTable />
    </>
  );
};

export default Licenses;
