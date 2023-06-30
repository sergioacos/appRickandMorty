import * as React from "react";
import Navbar from "../navbar/index";
import Card from "../home/card/index";
import Pagin from "../pagin/index";
import { useState, useEffect } from "react";
import "./home/module.css";

interface props{
    route:string;

}

export default function Home ({route}:props) {

    const [characters, setCharacters]= useState();
    const [Page, setPage]= useState('');
    const handlePage=()=>{ //setPage(Page+1)

}
    useEffect(()=>{
        requestCharacters();
    },[]);
    
    async function requestCharacters(){
        try{
            const res= await fetch( `https://rickandmortyapi.com/api/character/?page=${Page}`);
            const json = await res.json();
            console.log(Page)
            setCharacters(json.results);
        } catch (e) {console.error(e)}
        }
        

    return(
    <>
    <div className="main" > 
    
       
        <div className="home">
        {characters?(
            characters.map((character: { name: string; image: string; species:string; id:number })=>{
                return(
                    <Card  key={character.name} nameC= {character.name} address={character.image} specie={character.species} id={character.id}></Card>

                );
            })
        ):(
            <h1>Cargando...</h1>
        )}
        
        </div>
        <Pagin handlePage={handlePage}></Pagin>
    </div>
    </>
    )

}