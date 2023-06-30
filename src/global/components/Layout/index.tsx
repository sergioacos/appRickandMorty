import Navbar from "../navbar/index";
import * as React from "react";
import { Outlet } from "../../../../node_modules/react-router-dom/dist/index";

function Layout(){
    return (
    <>
    <Navbar/>
    <Outlet/>
    </>
        );
}

export default Layout;