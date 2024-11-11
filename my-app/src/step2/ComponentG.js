import React from "react";
import ScrabbleBoard from "./ComponentF";
import ComponentH from "./ComponentH";
import "../step2/step2.css"

function ComponentG() {
    return(
        <div style={{display: "flex", flexDirection:"row", gap:"100px"}}> 
            <ComponentH/>
            <ScrabbleBoard />
        </div>
    )
} 
export  default ComponentG;