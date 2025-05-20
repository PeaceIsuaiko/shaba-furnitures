import React from "react";
import Add from "./Add";
import Anal from "./Analytics";
import Edit from "./Edit";
import Mes from "./Mes";
import Pen from "./Pen";
import Prod from "./ProductList";
import Sale from "./Sale";
import Set from "./Set";
import Users from "./Users";
import Navbar from "../components/Navbar"


function AdminBoard()  {
    return(
        <div   className=" bg-yellow-400  flex flex-col fixed inset-0 z-50">
            <Navbar />
            <div className="py-14 ml-12">
            <Add />
            <Anal />
            <Edit />
            <Mes />
            <Pen />
            <Prod />
            <Sale />
            <Set />
            <Users />
            </div>
        </div>
    )
}

export default AdminBoard;