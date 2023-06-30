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
                <Link to="/">Home</Link>
                <Title text="Personajes"></Title>
                <Title text="Ubicaciones"></Title>
                <Title text="Episodios"></Title>
            </div>
        </div>
    )
} 

export default Navbar;