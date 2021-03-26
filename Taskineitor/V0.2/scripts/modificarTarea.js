import {tareas} from "./data.js";

/**
 * Retorna la tarea modificada en el listado de tareas.
 * @param {object} tarea
}*/
export default function modificarTarea(tarea){
    for (let i = 0; i < tareas.length; i++) {
        const tareaActual = tareas[i];
        if(tareaActual.id===tarea.id){
            tareas[i]=tarea;
            return tareas[i];
        }
    }
}