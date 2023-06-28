import * as React from "react";
import Navbar from "../../../global/components/navbar/index";
import { useState, useEffect } from "react";

/*interface Props{
    nameC:string;
    address:string;
    specie:string;
}*/



function Detail(/*{nameC, address, specie}:Props*/){
    const [characters, setCharacters]= useState();

    useEffect(()=>{
        requestCharacters();
    },[]);
    
    async function requestCharacters(){
        try{
            const res= await fetch( "https://rickandmortyapi.com/api/character");
            const json = await res.json();

            setCharacters(json.results);
        } catch (e) {console.error(e)}
        }
        console.log(characters)

    
    return(
        <div>
            <Navbar></Navbar>
            <a>
                <img src={setCharacters} alt="Foto de personaje"/>
            </a>
            <h3>Nombre: {setCharacters}</h3>
            <h3>Especie: {setCharacters}</h3>
            
        </div>

    )
} 
export default Detail