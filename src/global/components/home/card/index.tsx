import * as React from "react";
import {Link} from "../../../../../node_modules/react-router-dom/dist/index";
interface Props{
nameC:string;
address:string;
specie:string;
id:number;

}
function Card({nameC, address, specie, id}:Props){


    return(
        <div>
            <Link to={`/detail/${id}`}>
                <a>
                    <img src={address} alt="Foto de personaje"/>
                </a>
                <h3>Nombre: {nameC}</h3>
                <h3>Especie: {specie}</h3>
            </Link>
        </div>

    )
}
export default Card