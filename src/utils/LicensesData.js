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
  }