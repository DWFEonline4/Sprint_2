export function elimiarTarea(id){
    tareas.forEach(
      (tarea, i)=>{
          if(tarea.id===id){
              tareas.splice(i,1);
          }
      }
    );
}