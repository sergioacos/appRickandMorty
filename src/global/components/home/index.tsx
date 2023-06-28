import * as React from "react";
import Navbar from "../navbar/index";
import Card from "../home/card/index";
import Pagin from "../pagin/index";
import { useState, useEffect } from "react";
import "./home/module.css";



export default function Home () {

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
    <>
    <div className="main" > 
    
        <Navbar></Navbar>
        <div className="home">
        {characters?(
            characters.map((character: { name: string; image: string; species:string })=>{
                return(
                    <Card  key={character.name} nameC= {character.name} address={character.image} especie={character.species}></Card>

                );
            })
        ):(
            <h1>Cargando...</h1>
        )}
        
        </div>
        <Pagin></Pagin>
    </div>
    </>
    )

}