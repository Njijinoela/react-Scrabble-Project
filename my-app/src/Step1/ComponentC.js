import Board from "./ComponentE";
import ComponentD from "./ComponentD";

function ComponentC(){
    return (
     <div style={{ display: "flex", flexDirection: "row", gap : "50px"}}>
            <ComponentD />
            <Board />
        </div>
    )
}

export default ComponentC;