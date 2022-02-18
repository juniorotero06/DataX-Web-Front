import React from "react";
import UsersTable from "../components/UsersTable";
import Sidebar from "../components/SideBar";

const Users = () => {
    return(
        <>
            <Sidebar/>
            <UsersTable/>
        </>
    );
}

export default Users;