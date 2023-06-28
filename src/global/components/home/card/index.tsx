import * as React from "react";
interface Props{
nameC:string;
address:string;
specie:string;

}
function Card({nameC, address, specie}:Props){


    return(
        <div>
            <button /*onClick= {handlerCard}*/>
                <a>
                    <img src={address} alt="Foto de personaje"/>
                </a>
                <h3>Nombre: {nameC}</h3>
                <h3>Especie: {specie}</h3>
            </button>
        </div>

    )
}
export default Card