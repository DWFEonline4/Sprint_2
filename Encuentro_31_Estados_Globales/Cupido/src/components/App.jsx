import React, { useState } from "react";
import Corazon from "./Corazon";
import "../css/App.css";
import {corazones} from "../data/corazon-info.js";

export default function App() {
  let corazonesRotos = corazones.filter(e=>e.roto);
  console.log(corazonesRotos);
  const [contRotos, calcularCorazones] = useState(corazonesRotos.length);
  let calcularCorazonesRotos = (suma)=>{
    if (suma){
      calcularCorazones(contRotos + 1);
    }else{
      calcularCorazones(contRotos - 1);
    }
  }
  
  return (
    <div className="App">
      <h2>Hay {contRotos} corazones rotos</h2>
      {corazones.map(
        (corazon, i)=>{
          return <Corazon 
                    key={i}
                    id={corazon.id}
                    roto={corazon.roto} 
                    eventoDeLosCorazones={calcularCorazonesRotos}
        />}
      )}
      
    </div>
  );
}