import * as AiIcons from "react-icons/ai";

export const modalData = {
  title: "Añadir Usuario",
  variantButtom: "success",
  showFooter: false,
};

export const modalUpdate = {
  icon: <AiIcons.AiFillEdit />,
  title: "Actualizar",
  variantButtom: "primary",
  showFooter: false,
};

export const formData = {
  url: "https://api-atxel.herokuapp.com/api/users/store",
  action: "create",
  initialValues: {
    name: "",
    lastname: "",
    phone: "",
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
      label: "Teléfono: ",
      htmlFor: "phone",
      name: "phone",
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

export const formUpdateData = {
  url: "https://api-atxel.herokuapp.com/api/users/",
  urlDesactive: "https://api-atxel.herokuapp.com/api/users/desactive/",
  action: "update",
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
      label: "Teléfono: ",
      htmlFor: "phone",
      name: "phone",
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

export const tableData = {
  head: [
    {
      tableHead: "Id",
    },
    {
      tableHead: "Nombre",
    },
    {
      tableHead: "Apellido",
    },
    {
      tableHead: "Password",
    },
    {
      tableHead: "Teléfono",
    },
    {
      tableHead: "Activo",
    },
    {
      tableHead: "Email",
    },
    {
      tableHead: "Fecha de creación",
    },
    {
      tableHead: "Fecha de actualización",
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
