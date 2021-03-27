import React, {useState} from "react";
import "../css/App.css";
import {albumes} from "../data/albumes.js"

export default function App() {
  return (
    <>
    <Input/>
    <Check/>
    <Select/>
    <SelectAlbum/>
    </>
  );
}

function Input(){
  const[valor, cambiarValor] = useState("");
  let change=(e)=>{
    if(typeof(parseInt(e.target.value)==Number)){
      cambiarValor(e.target.value);
    }
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

function Select(){
  const [valor, cambiarSeleccion] = useState("");
  let cambioSelect = (elemento)=>{
    cambiarSeleccion(elemento.target.value);
    console.log(elemento.target.value);
  }
  return(
    <select value={valor} onChange={cambioSelect} id="selectEx" required>
      <option value="">Seleccionar</option>
      <option value="1">Argentina</option>
      <option value="2">Colombia</option>
      <option value="3">Mexico</option>
      <option value="4">Peru</option>
    </select>
  )
}

function SelectAlbum(){
  const [valor, cambiarSeleccion] = useState("");
  let cambioSelect = (elemento)=>{
    cambiarSeleccion(elemento.target.value);
    console.log(elemento.target.value);
  }
  return(
    <select value={valor} onChange={cambioSelect}>
      <option value="">Seleccionar</option>
      {albumes.map((album)=>crearElementos(album))}
    </select>
  )
}

function crearElementos(elem){
  let valor = elem.genero.toLowerCase();
  return(<option value={valor}>{valor}</option>);
}