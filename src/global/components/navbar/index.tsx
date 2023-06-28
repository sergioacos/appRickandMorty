import * as React from "react";
import Title from "./titles/index";
import "./navBar.css"

function Navbar(){
    return(
        <div>
            <a>
                <img></img>
            </a>
            <div className="navBar">
                <Title text="Personajes"></Title>
                <Title text="Ubicaciones"></Title>
                <Title text="Episodios"></Title>
            </div>
        </div>
    )
} 

export default Navbar