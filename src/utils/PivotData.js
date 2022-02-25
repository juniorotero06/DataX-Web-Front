export const modalData = {
    title: "Crear Asociasión",
    variantButtom: "success",
    showFooter: false
  };

export const formData = {
    url: "http://localhost:3001/api/pivot/store",
    initialValues: {
      UserId: "",
      RolId: "",
      LicenseId: ""
    },
    fields: [
      {
        label: "ID del usuario: ",
        htmlFor: "UserId",
        name: "UserId",
        type: "text",
      },
      {
        label: "ID del rol: ",
        htmlFor: "RolId",
        name: "RolId",
        type: "text",
      },
      {
        label: "ID de la Licensia: ",
        htmlFor: "LicenseId",
        name: "LicenseId",
        type: "text",
      },
    ],
  };

  export const tableData = {
    url: "http://localhost:3001/api/pivot?page=0&size=10",
    head: [
      {
        tableHead: "Id"
      },
      {
        tableHead: "Fecha de creación"
      },
      {
        tableHead: "Fecha de actualización"
      },
      {
        tableHead: "Id del Usuario"
      },
      {
        tableHead: "Id del Rol"
      },
      {
        tableHead: "Id de la Licensia"
      }
    ]
  }