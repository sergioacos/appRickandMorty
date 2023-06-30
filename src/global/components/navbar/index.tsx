import * as React from "react";
import Title from "./titles/index";
import "./navBar.css"
import { Link } from "../../../../node_modules/react-router-dom/dist/index";

function Navbar(){
    return(
        <div>
            <a>
                <img></img>
            </a>
            <div className="navBar">
                <Link to="/">Personajes</Link>
                <Link to="/ubicaciones">Ubicaciones</Link>
                <Link to="/episodios">Episodios</Link>
            </div>
        </div>
    )
} 

export default Navbar;