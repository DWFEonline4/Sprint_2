import {tareas} from "./data.js";
import {mostrarTarea} from "./mostrarTarea.js";
import agregarTarea from "./agregarTarea.js"; //No tiene llaves, ver diferencia en el export default
import {elimiarTarea} from "./eliminarTarea.js"
  // 1. mostrar la última tarea por consola
  console.log("1. mostrar la última tarea por consola");
  console.log(tareas[tareas.length-1]);

  // 2. mostrar el titulo de la primera tarea por consola
  console.log("2. mostrar el titulo de la primera tarea por consola");
  console.log(tareas[0].titulo);

  // 3. crear un ciclo que muestre todas las tareas de la lista
  console.log("3. crear un ciclo que muestre todas las tareas de la lista");
  for (let i = 0; i < tareas.length; i++) {
      const tarea = tareas[i];
      console.log(tarea);
  }

  // 4. crear un ciclo que muestre todos los titulos de las tareas
  console.log("4. crear un ciclo que muestre todos los titulos de las tareas");
  // Otra forma de recorrer arreglos
  tareas.forEach((tarea)=>{console.log(tarea.titulo)});

  // 5. crear un ciclo que muestre las fechas de creación de cada tarea
  console.log("5. crear un ciclo que muestre las fechas de creación de cada tarea");
  for (let i = 0; i < tareas.length; i++) {
      const tarea = tareas[i];
      console.log(tarea.fechaCreada);
  }
 
  // y la invocación, esta:
  console.log("Invocación de funcion mostrarTarea(3, tareas)");
  mostrarTarea(3, tareas); // mostrará por consola la 3era tarea
  
  // EXTRAS:
  
  // 7. crear una función que agregue una tarea nueva a la colección
  console.log("7. crear una función que agregue una tarea nueva a la colección");

  console.log("Invoca la función agregarTarea() con los parametros titulo y opcionales completada y fecha");
  
  // 8. crear una función que elimine una tarea de la colección
  console.log("8. crear una función que elimine una tarea de la colección");

  console.log("Invoca la función elimiarTarea() con el parametro de id");

  console.log("Invoca la función modificarTarea() con un objeto tarea completo");
