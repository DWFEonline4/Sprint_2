let nombres = ["Christian", null, "Silvi", "Pereira", "Luis", "Bruno", 5];


console.log(nombres.indexOf("Silvi"));
console.log(nombres[nombres.indexOf("Silvi")+1]);


console.log(nombres);
console.log(nombres.length);

for(let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}


for(let i=nombres.length-1; i>=0; i--){
    console.log(nombres[i]);
}

let apellidos = new Array();
console.log(apellidos);

//Agregar al final
apellidos.push("Zapata");
console.log(apellidos);
apellidos.push(5);
console.log(apellidos);
//Agregar al principio
apellidos.unshift("Primero");
console.log(apellidos);

//Buscar posición del elemento que coincida 
console.log(apellidos.indexOf("Zapata"));
console.log(apellidos.indexOf("zapata"));
console.log(apellidos[apellidos.indexOf("Zapata")]);

/*Operaciones con Arrays
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array*/