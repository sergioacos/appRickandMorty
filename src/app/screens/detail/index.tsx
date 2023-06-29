import * as React from "react";
import Navbar from "../../../global/components/navbar/index";
import { useState, useEffect, } from "react";
import { useParams } from "../../../../node_modules/react-router-dom/dist/index";
/*interface Props{
    nameC:string;
    address:string;
    specie:string;
}*/



function Detail(/*{nameC, address, specie}:Props*/) {
    const [character, setCharacter] = useState();
    const [error, setError] = useState();
    const { id } = useParams();

    useEffect(() => {
        requestCharacter();
    }, []);

    async function requestCharacter() {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const json = await res.json();
            //atrapamos error en la peticion
            if (json.error) {
                setError(json.error);
            }

            setCharacter(json);
        } catch (e) { console.error(e) }
    }
    console.log(character);

    if (error) {
        return (
            <>
                <h1>
                    Error en la petición
                </h1>
                <p>{error}</p>
            </>
        )
    }


    return (
        <div>
            {character ? (
                <>
                    <Navbar></Navbar>
                    <a>
                        <img src={character.image} alt="Foto de personaje" />
                    </a>
                    <h3>Nombre: {character.name}</h3>
                    <h3>Especie: {character.species}</h3>
                    <h3>Tipo: {character.type}</h3>
                    <h3>Genero: {character.gender}</h3>
                </>
            ) : (<h1>Cargando...</h1>
                )}
        </div>

    )
}
export default Detail