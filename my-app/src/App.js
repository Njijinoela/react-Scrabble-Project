import ComponentA from "./Step1/ComponentA";
import ComponentG from "./step2/ComponentG";
import ComponentI from "./Step3/ComponentI";
import ComponentL from "./step 4/ComponentL";


function App() {

 return (
    <div>
      <ComponentA />
    <div style={{display: "flex", flexDirection: "row", gap : "500px"}}>
     <ComponentG />
     <ComponentI/>
     </div>
    <ComponentL />
    </div>
  )
}

export default App;
