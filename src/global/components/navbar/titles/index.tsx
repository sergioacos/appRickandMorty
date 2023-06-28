import * as React from "react";
import { string } from "prop-types";
interface Props {
    text:string;
}


function Title({ text }:Props){

    return (
    <div>
        <h2>{text}</h2>
    </div>
    )
} 
export default Title