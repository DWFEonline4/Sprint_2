import '../css/App.css';
import Tarea from './Tarea';
import {tareas} from '../data/tareas.js'
export default function App() {
  return (
    <div className="AppTaskineitor">
      {tareas.map(
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