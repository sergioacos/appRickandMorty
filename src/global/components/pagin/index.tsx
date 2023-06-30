import * as React from "react";
import "./pagin.css"
import { useState } from "react";

interface Props {
    numPage: number;
    handlePage: (Page:number)=>void;
   // setPage:()=> void;
    //onPageChange: (selectedPage: number) => void;
  }
export default function Pagin ({handlePage}:Props){
    const [numPage, setPage]=useState(1)
   // const Page=Page;
    const handleNextPag =()=>{ 
        setPage (numPage+1); 
        () =>handlePage(Number(Page));
    };
    const handlePrevPag =()=>{ 
        
    setPage (numPage-1); 
    () =>handlePage(Number(Page-1));
    };
    
    return(
        <div className="pagin">
            <button onClick= {()=>handlePrevPag()} disabled={numPage==1}>{"<"}</button>
            <h2>Página {numPage}</h2>
            <button onClick={() =>handleNextPag()} disabled={numPage==42}>{">"}</button>
        </div>
    );

};