const CANTIDAD_PERSONAS = 3;

let personaUno = 10;
let personaDos = 10;
let personaTres = 5;

let decibelios;

var mensaje="La cantidad de decibelios es ";

decibelios = personaUno + personaDos + personaTres;

if(decibelios >= 0 && decibelios <= 30){ // if(decibelios < 31){
    console.log(mensaje + "muy bajo y están susurrando");
}
/* 
Comentarios multi-linea
*/

if(decibelios >30 && decibelios < 60){ 
    console.log(mensaje + "moderado y están hablado normal");
}

if(decibelios >=60){ 
    console.log(mensaje + "muy alta  y están haciendo ESCANDALO");
}

let promedio = decibelios/CANTIDAD_PERSONAS;

console.log("El promedio de decibielios es "+promedio);

console.log("La cantidad de decibielios es  "+decibelios);