let albumes = [
    {
      genero: "dance",
      artista: "Rozes",
      titulo: "Under the Grave",
      lanzamiento: "02-14-2016",
    },
    {
      genero: "soul",
      artista: "The Weeknd",
      titulo: "Starboy",
      lanzamiento: "11-25-2018",
    },
    {
      genero: "pop",
      artista: "Sia",
      titulo: "Cheap Thrills",
      lanzamiento: "4-13-2017",
    },
    {
      genero: "rock",
      artista: "Queen",
      titulo: "The Miracle",
      lanzamiento: "5-22-1989",
    },
    {
      genero: "pop",
      artista: "Ariana Grande",
      titulo: "Sweetener",
      lanzamiento: "4-13-2017",
    },
    {
      genero: "pop",
      artista: "NSYNC",
      titulo: "No strings attached",
      lanzamiento: "3-29-2000",
    },
    {
      genero: "pop",
      artista: "Little Mix",
      titulo: "Confetti",
      lanzamiento: "11-6-2020",
    }
  ];
  
  
  // 1. mostrar el primer albúm por consola
  console.log("  // 1. mostrar el primer albúm por consola");
  console.log(albumes[0]);

  // 2. mostrar el titulo del último albúm por consola
  console.log("  // 2. mostrar el titulo del último albúm por consola");
  console.log(albumes[albumes.length-1].titulo);

    let arreglo =[]
    arreglo.length; //0
    arreglo["posición uno"];
    arreglo.length; //1
    arreglo[arreglo.length-1]// posición uno

  // 3. crear un ciclo que muestre todos los albumes de la colección
  console.log("  // 3. crear un ciclo que muestre todos los albumes de la colección");
  for (let i = 0; i < albumes.length; i++) {
      console.log(albumes[i]);
  }

  // 4. crear un ciclo que muestre solo los artistas de la colección
  console.log("  // 4. crear un ciclo que muestre solo los artistas de la colección");
for (let i = 0; i < albumes.length; i++) {
    console.log("Artista del album " + albumes[i].artista);
    console.log(`Artista del album ${albumes[i].artista} y el genero es ${albumes[i].genero}`);
}

  // 5. crear un ciclo que muestre solo los titulos de la colección
  console.log("// 5. crear un ciclo que muestre solo los titulos de la colección");
  albumes.forEach(function(elemento){
    console.log(elemento.titulo);
}
);

console.log("Muestro el titulo de los albumes pop");
albumes.forEach(function(elemento){
        if(elemento.genero=="pop"){
            console.log(elemento.titulo);
        }
    }
);


  // 6. crear una función que muestre un albúm por consola, a través de un id (se deberá agregar un id a cada albúm)
  // la definición puede ser esta:

  function agregarIds(){
      if(albumes[0].id===undefined){
          albumes.forEach(function(elem,index){
              elem.id=index;
          });
      }
  }
  agregarIds();
  function mostrarAlbum(id) {
    for (let i = 0; i < albumes.length; i++) {
        if(albumes[i].id===id){
            console.log(albumes[i]);
            i=albumes.length;
            //break;
            //return;
        }
    }
  }
 
  // y la invocación, esta:
  mostrarAlbum(3); 
  // mostrar por consola el tercer albúm
  
  // EXTRAS:
  
  // 7. crear una función que agregue un albúm nuevo a la colección
  albumes.push(
    {
        genero: "dance",
        artista: "Acamica",
        titulo: "Sprint 2",
        lanzamiento: "02-17-2021"
    }
  );
  agregarIds();
  // 8. crear una función que elimine un albúm de la colección, según un id
function eliminarAlbum(id){
    for (let i = 0; i < albumes.length; i++) {
        if(albumes[i].id===id){
            console.log("Se eliminará el objeto:");
            console.log(albumes[i]);
            albumes.splice(i,1);
            break;
        }
    }
    console.log("Objeto eliminado");
}
