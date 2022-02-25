import React from "react";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";
import FormComponent from "../components/Form";
import TableComponent from "../components/TableComponent";

import { modalData, formData, tableData } from "../utils/LicensesData";

const Licenses = () => {
  
  const formAux = () => {
    return <FormComponent formData={formData}/>;
  };
  
  return (
    <>
      <Sidebar />
      <ModalComponent modalData={modalData} body={formAux} />
      <TableComponent tableData={tableData}/>
    </>
  );
};

export default Licenses;
