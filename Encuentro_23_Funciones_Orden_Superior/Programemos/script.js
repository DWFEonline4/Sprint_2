//#### Se solicita Urgentemente ####
function seSolicitaA(nombre){
    console.log(`Se solicita a ${nombre} de inmediato`);
}
seSolicitaA("Christian");

let nombreEnMayuscula = nombre => nombre.toUpperCase() + "!!!";
console.log(nombreEnMayuscula("christian"));

let llamarUrgentemente = function (nombre, mayuscula){
    seSolicitaA(mayuscula(nombre));
}

llamarUrgentemente("Chris", nombreEnMayuscula);

