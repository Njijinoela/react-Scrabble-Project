import ComponentA from "./Step1/ComponentA";
import ComponentG from "./step2/ComponentG";
import ComponentI from "./Step3/ComponentI";
function App() {
  return (
    <div>
       <ComponentA />
    <div style={{display: "flex", flexDirection: "row", gap : "50px"}}>
     
      <ComponentG />
      <ComponentI/>
    </div>
    </div>
  )
}

export default App;
