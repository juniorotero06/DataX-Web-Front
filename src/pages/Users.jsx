import React from "react";
import UsersTable from "../components/UsersTable";
import Sidebar from "../components/SideBar";
import ModalComponent from "../components/ModalComponent";

const modalData = {
    title: "Añadir Usuario",
    variant: "success"
}

const Users = () => {
    return(
        <>
            <Sidebar/>
            <ModalComponent modalData={modalData}/>
            <UsersTable/>
        </>
    );
}

export default Users;