import React, { useState } from 'react';
import '../css/App.css';
import Tarea from './Tarea';
import {tareas} from '../data/tareas.js'

export default function App() {
  const[listaTareas, cambiarTareas]=useState(tareas);
  const[categoria, cambiarCategoria]=useState("");
  
  let clickCategoria=(e)=>{
    const categoria = e.target.value;
    cambiarCategoria(categoria);
  }

  let tareasFiltradas = ()=>{
    return categoria===""?listaTareas:listaTareas.filter(t=>t.categoria===categoria);
  }

  let cambiarCompletada = (tarea) => {
    const listaActualizada = listaTareas.map(t=>{
      if(t.id===tarea.id)
        return {...t, completada: !tarea.completada};
      else
        return t;
    });
    cambiarTareas(listaActualizada);
  }
  
  return (
    <div className="AppTaskineitor">
      <select onChange={clickCategoria} value={categoria}>
        <option value="">Categoria</option>
        <option value="casa">Casa</option>
        <option value="salud">Salud</option>
        <option value="estudio">Estudio</option>
      </select>
      {tareasFiltradas().map(
        tarea=>{
          return(
            <Tarea 
              id={tarea.id}
              titulo={tarea.titulo}
              completada={tarea.completada}
              fechaCreada={tarea.fechaCreada}
              categoria={tarea.categoria}
              clickCompletada={()=>cambiarCompletada(tarea)}
            />
          );
        }
      )}
    </div>
  );
}