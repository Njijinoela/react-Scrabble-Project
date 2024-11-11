import React from "react";
import ScrabbleBoard from "./component.c";
import componentB from "./componentB";

function componentA () {
    return(
        <div> 
            <componentB />
            <ScrabbleBoard />
        </div>
    )
} 
export  default componentA;