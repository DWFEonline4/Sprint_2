import React, {useState} from "react";
import "../css/App.css";
import { albumes } from "../data/albumes.js";

export default function App() {
  return (
    <>
    <Input/>
    <Check/>
    </>
  );
}

function Input(){
  const[valor, cambiarValor] = useState("");
  let change=(e)=>{
    cambiarValor(e.target.value);
    console.log("Valor de estado " + valor);
    console.log("Valor de elemento " + e.target.value);
  }
  return(
    <input type="text" id="txt" onKeyUp={change}/>
  );
}

function Check(){
  const[estado, cambiarCheckbox] = useState(false);
  let change=(e)=>{
    cambiarCheckbox(e.target.checked);
    console.log(e.target);
  }
  return(
    <input type="checkbox" onChange={change} checked={estado} id="ch" value="valor"/>
  );
}

