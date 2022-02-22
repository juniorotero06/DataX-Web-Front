import React from "react";
import UsersTable from "../components/UsersTable";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";

import { handleShowModal } from "../redux/actions";
import { connect } from "react-redux";

import Form from "../components/Form";

const Users = (props) => {

    const modalData = {
        title: "Añadir Usuario",
        variantButtom: "success",
        showFooter: true,
        footer: [
          {
            variant: "success",
            content: "Close",
            onClick: () => {
              props.handleShowModal(false)
            }
          },
          {
            variant: "danger",
            content: "Accept",
          },
        ],
      };
      
  return (
    <>
      <Sidebar />
      <ModalComponent modalData={modalData} body={Form} />
      <UsersTable />
    </>
  );
};

function mapDispatchToProps(dispatch) {
    return {
      handleShowModal: (bool) => dispatch(handleShowModal(bool)),
    };
  }

export default connect(null, mapDispatchToProps)(Users);
