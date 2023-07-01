import * as React from "react";
import Card from "../home/card/index";
import Pagin from "../pagin/index";
import { useState } from "react";
import "./home/module.css";
import useGetData from "../../../app/hooks/useGetData";

interface props{
    //route:string;

}

export default function Home ({}:props) {

    //const [datas, setdatas]= useState();
    const [Page, setPage]= useState(1);
   // const handlePage=()=>{ //setPage(Page+1)

//}
const { data, error, loading } = useGetData<props>(`https://rickandmortyapi.com/api/character/?page=${Page}`);
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
   

    return(
    <>
    <div className="main" > 

        <div className="home">
        {console.log(data)}
        {data && (
            data.results.map((dat: { name: string; image: string; species:string; id:number })=>{
                return(
                    <Card  key={dat.name} nameC= {dat.name} address={dat.image} specie={dat.species} id={dat.id}>{Page}</Card>

                );
            })
        )}
        
        </div>
        <Pagin /*handlePage={handlePage}*/></Pagin> 
    </div>
    </>
    )

}