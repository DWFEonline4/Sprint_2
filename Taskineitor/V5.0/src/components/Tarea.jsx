import { useState } from 'react';
import '../css/Tarea.css';

export default function Tarea(props) {
  let tituloClick = (e)=>console.log(e.target.textContent);
  let fechaClick = (e)=>console.log(e.target.textContent);
  let eliminarClick = (e)=>alert("¿Deseas borrar la tarea " + e.target.alt + " - Hoy "+ new Date().toLocaleDateString("en-US") +"?");
  return (
    <div className="task" key={props.id}>
      <div className="left">
        <span className="titulo" onClick={tituloClick}>{props.titulo}</span>
        <span className="fecha fecha_click" onClick={fechaClick}>{props.fechaCreada}</span>
        <span className="fecha fecha_dias">{calcularFecha(props.fechaCreada.split('/'))}</span>
        <span className="cat_desc">Categoria:</span>
        <span className="categoria">{props.categoria}</span>
      </div>
      <div className="right">
        <input type="checkbox" defaultChecked={props.completada} onClick={props.clickCompletada}/>
        <img onClick={eliminarClick} alt={props.titulo} src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png"/>
      </div>
    </div>
  );
}

function calcularFecha(date){
  const fecha = new Date(date[2], date[1], date[0])
  const hoy = new Date();
  let diferencia = hoy.getTime() - fecha.getTime();
  let diferenciaDias = Math.floor(diferencia / (1000 * 3600 * 24));
  return diferenciaDias>0?`  - Hace ${diferenciaDias} días`:' - Hoy';
}