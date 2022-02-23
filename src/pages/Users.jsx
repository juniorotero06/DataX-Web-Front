import React from "react";
import UsersTable from "../components/UsersTable";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";

import { handleShowModal } from "../redux/actions";
import { connect } from "react-redux";

import FormComponent from "../components/Form";

const formData = {
  url: "http://localhost:3001/api/users/store",
  initialValues: {
    name: "",
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
      label: "Email: ",
      htmlFor: "email",
      name: "email",
      type: "email",
    },
  ],
};

const Users = (props) => {
  const modalData = {
    title: "Añadir Usuario",
    variantButtom: "success",
    showFooter: true,
    footer: [
      {
        variant: "secondary",
        content: "Close",
        onClick: () => {
          props.handleShowModal(false);
        },
      },
      {
        variant: "primary",
        content: "Submit",
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
