import Board from "./ComponentE";
import ComponentD from "./ComponentD";

function ComponentC(){
    return (
     <div >
            <ComponentD />
           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0" }}>
            <Board />
            </div>

        </div>
    )
}

export default ComponentC;