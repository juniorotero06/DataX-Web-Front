import React from "react";
import UsersTable from "../components/UsersTable";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";

import { handleShowModal } from "../redux/actions";
import { connect } from "react-redux";

import FormComponent from "../components/Form";

const Users = (props) => {
  const modalData = {
    title: "Añadir Usuario",
    variantButtom: "success",
    showFooter: false,
    footer: [
      {
        variant: "secondary",
        content: "Close",
        onClick: () => {
          props.handleShowModal(false);
        },
      },
    ],
  };

  const formData = {
    url: "http://localhost:3001/api/users/store",
    initialValues: {
      name: "",
      lastname: "",
      password: "",
      email: "",
    },
    fields: [
      {
        label: "Nombre: ",
        htmlFor: "name",
        name: "name",
        type: "text",
      },
      {
        label: "Apellido: ",
        htmlFor: "lastname",
        name: "lastname",
        type: "text",
      },
      {
        label: "Email: ",
        htmlFor: "email",
        name: "email",
        type: "email",
      },
      {
        label: "Password: ",
        htmlFor: "password",
        name: "password",
        type: "password",
      },
    ],
  };
  
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

function mapDispatchToProps(dispatch) {
  return {
    handleShowModal: (bool) => dispatch(handleShowModal(bool)),
  };
}

export default connect(null, mapDispatchToProps)(Users);
