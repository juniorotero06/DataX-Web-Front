import React from "react";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";
import FormComponent from "../components/Form";
import TableComponent from "../components/TableComponent";
import SimpleTable from "../components/SimpleTable";
import { Button } from "react-bootstrap";
import {
  modalData,
  formData,
  tableData,
  modalUpdate,
  formUpdateData,
  modalRoles,
  tableRol,
} from "../utils/PivotData";

import { connect } from "react-redux";

const UserRolLicense = (props) => {
  const [stateModalCreate, setModalCreate] = React.useState(false);
  const [stateModalUpdate, setModalUpdate] = React.useState(false);
  const [stateModalRol, setModalRol] = React.useState(false);

  formUpdateData.initialValues = {
    UserId: props.values.UserId,
    RolId: props.values.RolId,
    LicenseId: props.values.LicenseId,
  };

  modalRoles.footer = [
    {
      variant: "secondary",
      content: "Close",
      onClick: () => {
        setModalRol(!stateModalRol);
      },
    },
  ];

  const formAux = () => {
    return <FormComponent formData={formData} />;
  };
  const formUpdate = () => {
    return <FormComponent formData={formUpdateData} />;
  };
  const tableRols = () => {
    return <SimpleTable tableData={tableRol} />;
  };

  return (
    <>
      <Sidebar />

      {/* Create */}
      <Button
        //disabled={props.loading === true}
        variant={modalData.variantButtom}
        onClick={() => setModalCreate(!stateModalCreate)}
      >
        {modalData.title}
      </Button>
      <ModalComponent
        modalData={modalData}
        body={formAux}
        state={stateModalCreate}
        setState={setModalCreate}
      />

      {/* Roles */}
      <Button
        //disabled={props.loading === true}
        variant={modalRoles.variantButtom}
        onClick={() => setModalRol(!stateModalRol)}
      >
        {modalRoles.title}
      </Button>
      <ModalComponent
        modalData={modalRoles}
        body={tableRols}
        state={stateModalRol}
        setState={setModalRol}
      />
      <TableComponent
        modalData={modalUpdate}
        tableData={tableData}
        formData={formUpdate}
        formUpdateData={formUpdateData}
        state={stateModalUpdate}
        setState={setModalUpdate}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    values: state.values,
  };
}

export default connect(mapStateToProps)(UserRolLicense);
