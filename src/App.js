import { useState } from "react";
import "./App.css";

function App() {
  let [color,changecolor]=useState("#000000")
  

  function choose(event)
  {
    changecolor(event.target.value)
    console.log(event.target.value)
    
  }    

  return (
    <div className="w-screen h-screen" style={{background:color}}  >
      <label>Choose the color </label>
      <input onChange={choose} value={color} type="color"></input>
    </div>
    
  );
}

export default App;
