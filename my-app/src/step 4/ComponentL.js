import React from "react";
import ComponentM from "./ComponentM";
import ComponentN from "./ComponentN";
function ComponentL (){
    return (
        <div style={{display : "flex", flexDirection: "row", gap: "150px", backgroundColor:"#8CBDB9"}}>
        <ComponentM />
        <ComponentN />  
        </div>
    )
}
export default ComponentL ;