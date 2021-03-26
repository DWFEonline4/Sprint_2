import {tareas} from "./data.js";

/**
 * Agrega al arreglo tareas una nueva tarea con los parametros recibidos.
 * @param {string} titulo Titulo de la tarea
 * @param {boolean} [completada=false] Estado de la tarea, por defecto sin completar
 * @param {Date} [fecha=new Date()] Fecha de la tarea, por defecto la fecha actual
}*/
export default function agregarTarea(titulo, completada=false, fecha=new Date()){
    let nuevaTarea={
      id: tareas[tareas.length-1].id+1,
      titulo: titulo,
      completada: completada,
      fechaCreada: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`
    }
    tareas.push(nuevaTarea);
    return nuevaTarea;
}