import * as React from "react";
import { Link } from "../../../../node_modules/react-router-dom/dist/index";

function NotFound (){
    return(
        <>
        <h1> 404</h1>
        <p>Esta pagian no existe</p>
        <Link to ="/">Volver a home</Link>
        </>
    )
}
export default NotFound;