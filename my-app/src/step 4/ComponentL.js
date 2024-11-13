import React from "react";
import ComponentM from "./ComponentM";
import ComponentN from "./ComponentN";
function ComponentL (){
    return (
        <div style={{backgroundColor:"#8CBDB9",}}>
        <ComponentM />
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0",backgroundColor:"#8CBDB9"}}>
        <ComponentN />  
        </div>
        </div>
    )
}
export default ComponentL ;