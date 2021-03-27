import '../css/App.css';
import Tarea from './Tarea';
import {tareas} from '../data/tareas.js'
import { useState } from 'react';
export default function App() {
  const[tareasFiltradas, cambiarTareas]=useState(tareas);
  const[categoria, cambiarCategoria]=useState("");
  let clickCategoria=(e)=>{
    const cat = e.target.value;
    cambiarCategoria(cat);
    cambiarTareas(cat===""?tareas:tareas.filter(tarea=>tarea.categoria===cat));
  }
  return (
    <div className="AppTaskineitor">
      <select onChange={clickCategoria} value={categoria}>
        <option value="">Categoria</option>
        <option value="casa">Casa</option>
        <option value="salud">Salud</option>
        <option value="estudio">Estudio</option>
      </select>
      {tareasFiltradas.map(
        tarea=>{
          return(
            <Tarea 
              id={tarea.id}
              titulo={tarea.titulo}
              completada={tarea.completada}
              fechaCreada={tarea.fechaCreada}
              categoria={tarea.categoria}
            />
          );
        }
      )}
    </div>
  );
}