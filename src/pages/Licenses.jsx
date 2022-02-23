import React from "react";
import LicensesTable from "../components/LicensesTable";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";

import { handleShowModal } from "../redux/actions";
import { connect } from "react-redux";

import FormComponent from "../components/Form";

const Licenses = (props) => {
    
  const modalData = {
    title: "Añadir Licensia",
    variantButtom: "success",
    showFooter: true,
    footer: [
      {
        variant: "success",
        content: "Close",
        onClick: () => {
          props.handleShowModal(false);
        },
      },
      {
        variant: "primary",
        content: "Test",
      },
    ],
  };

  return (
    <>
      <Sidebar />
      <ModalComponent modalData={modalData} body={FormComponent} />
      <LicensesTable />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    handleShowModal: (bool) => dispatch(handleShowModal(bool)),
  };
}

export default connect(null, mapDispatchToProps)(Licenses);
