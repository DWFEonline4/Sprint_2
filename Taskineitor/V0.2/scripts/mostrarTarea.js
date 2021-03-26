/**
 * Imprime en consola una tarea completa como objeto.
 * @param {number} id Id de la tarea a mostrar
 * @param {object} tareas Listado de tareas
}*/
export let mostrarTarea = (id, tareas) => {
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        if(id===tarea.id){
            console.log(tarea);
            break;
        }
    }
}