import * as React from "react";
import Navbar from "../../../global/components/navbar/index";
import { useState, useEffect, } from "react";
import { useParams } from "../../../../node_modules/react-router-dom/dist/index";
import useGetData from "../../hooks/useGetData";
interface Character {
    name: string;
    image: string;
    species: string;
    type: string;
    gender: string;
}


function Detail() {
    const { id } = useParams();
    const { data, error, loading } = useGetData<Character>(`https://rickandmortyapi.com/api/character/${id}`);
    if (loading) {
        return (
            <h1> Cargando...</h1>
        )
    }
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
            {data && (
                <>
                    <a>
                        <img src={data.image} alt="Foto de personaje" />
                    </a>
                    <h3>Nombre: {data.name}</h3>
                    <h3>Especie: {data.species}</h3>
                    <h3>Tipo: {data.type}</h3>
                    <h3>Genero: {data.gender}</h3>
                </>

            )}
        </div>

    )
}
export default Detail;