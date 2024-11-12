import React from "react";
import ComponentM from "./ComponentM";
import ComponentN from "./ComponentN";
function ComponentL (){
    return (
        <div style={{display : "flex", flexDirection: "row", gap: "50px"}}>
        <ComponentM />
        <ComponentN />  
        </div>
    )
}
export default ComponentL ;