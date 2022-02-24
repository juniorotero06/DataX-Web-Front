export const modalData = {
    title: "Añadir Usuario",
    variantButtom: "success",
    showFooter: false
  };

export const formData = {
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

//   modalData.footer = [
//     {
//       variant: "secondary",
//       content: "Close",
//       type: "???",
//       onClick: () => {
//         props.handleShowModal(false);
//       },
//     },
//   ]

// import { handleShowModal } from "../redux/actions";
// import { connect } from "react-redux";

// function mapDispatchToProps(dispatch) {
//     return {
//       handleShowModal: (bool) => dispatch(handleShowModal(bool)),
//     };
//   }
  
//   export default connect(null, mapDispatchToProps)(Users);
