export const modalData = {
    title: "Añadir Licensia",
    variantButtom: "success",
    showFooter: false,
  };

export const formData = {
    url: "http://localhost:3001/api/licenses/store",
    initialValues: {
      companyName: "",
      address: "",
      email: "",
      phone: "",
      host: "",
      bdUser: "",
      bdPass: "",
      bdName: ""
    },
    fields: [
      {
        label: "Compañia: ",
        htmlFor: "companyName",
        name: "companyName",
        type: "text",
      },
      {
        label: "Dirección: ",
        htmlFor: "address",
        name: "address",
        type: "text",
      },
      {
        label: "Email: ",
        htmlFor: "email",
        name: "email",
        type: "email",
      },
      {
        label: "Teléfono: ",
        htmlFor: "phone",
        name: "phone",
        type: "text",
      },
      {
        label: "Host: ",
        htmlFor: "host",
        name: "host",
        type: "text",
      },
      {
        label: "Usuario BD: ",
        htmlFor: "bdUser",
        name: "bdUser",
        type: "text",
      },
      {
        label: "Contraseña BD: ",
        htmlFor: "bdPass",
        name: "bdPass",
        type: "text",
      },
      {
        label: "Nombre BD: ",
        htmlFor: "bdName",
        name: "bdName",
        type: "text",
      }
    ]
  };

  export const tableData = {
    url: "http://localhost:3001/api/licenses?page=0&size=10",
    head: [
      {
        tableHead: "Id"
      },
      {
        tableHead: "Nombre de la Compañia"
      },
      {
        tableHead: "Dirección"
      },
      {
        tableHead: "Email"
      },
      {
        tableHead: "Teléfono"
      },
      {
        tableHead: "Activo"
      },
      {
        tableHead: "Host"
      },
      {
        tableHead: "Usuario BD"
      },
      {
        tableHead: "Password BD"
      },
      {
        tableHead: "Nombre BD"
      },
      {
        tableHead: "Fecha de creación"
      },
      {
        tableHead: "Fecha de actualización"
      }
    ]
  };