import React from "react";
import LicensesTable from "../components/LicensesTable";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";

const modalData = {
    title: "Añadir Licensia",
    variant: "danger"
}

const Licenses = () => {
    return(
        <>
            <Sidebar/>
            <ModalComponent modalData={modalData}/>
            <LicensesTable/>
        </>
    );
}

export default Licenses;