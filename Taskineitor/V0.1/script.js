let tareas = [
    {
      id: 1,
      titulo: "lavar los platos",
      completada: false,
      fechaCreada: "22/09/2020"
    },
    {
      id: 2,
      titulo: "lavar la ropa",
      completada: false,
      fechaCreada: "13/11/2020"
    },
    {
      id: 3,
      titulo: "preguntar mensualidad gym",
      completada: false,
      fechaCreada: "11/12/2020"
    },
    {
      id: 4,
      titulo: "revisar la bitácora 23",
      completada: false,
      fechaCreada: "13/01/2021"
    }
  ];
  
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
  // 6. crear una función que muestre una tarea por consola, a través de un id
  // la definición puede ser esta:
  function mostrarTarea(id) {
    // el código acá
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        if(id===tarea.id){
            console.log(tarea);
            break;
        }
    }
  }
  
  // y la invocación, esta:
  console.log("Invocación de funcion mostrarTarea(3)");
  mostrarTarea(3); // mostrará por consola la 3era tarea
  
  // EXTRAS:
  
  // 7. crear una función que agregue una tarea nueva a la colección
  console.log("7. crear una función que agregue una tarea nueva a la colección");
  function agregarTarea(titulo, completada=false, fecha=new Date()){
      let nuevaTarea={
        id: tareas[tareas.length-1].id+1,
        titulo: titulo,
        completada: completada,
        fechaCreada: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`
      }
      tareas.push(nuevaTarea);
      return nuevaTarea;
  }
  console.log("Invoca la función agregarTarea() con los parametros titulo y opcionales completada y fecha");
  
  // 8. crear una función que elimine una tarea de la colección
  console.log("8. crear una función que elimine una tarea de la colección");
  function elimiarTarea(id){
      tareas.forEach(
        (tarea, i)=>{
            if(tarea.id===id){
                tareas.splice(i,1);
            }
        }
      );
  }
  console.log("Invoca la función elimiarTarea() con el parametro de id");