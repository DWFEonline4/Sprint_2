const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','nueva palabra'];

//const result = words.filter(word => word.length > 6);
const result = words.filter((word) => {word.length > 6});
function validarTamano(word, pos){
    console.log("llego la palabra "+word+" de la posición "+pos);
    let res;
    if(word.length>6)
        res = true;
    else
        res = false;
    return res;
    /*res = word.length>6?true:false;
    return res;
    return word.length>6;
    return 
    if(word.length>6)
        return true;
    else
        return false;
        */
}
validarTamano('Christian',-1);
//const result = words.filter(validarTamano);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


var numbers = [1, 5, 10, 15];
var doubles = numbers.map(multiplicarPorDos);
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
function multiplicarPorDos(x) {
   return x * 2;
}

console.log(doubles);
var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
console.log(numbers);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


//////

function suma(a,b){
    return a+b;
}
console.log(suma(2,2)); //4

// 2 x 3 = 2 + 2 + 2 = 6
function multiplicacion(a, b, sumaCallback){
    let res=0;
    for (let i = 0; i < b; i++)
        res = sumaCallback(res,a);
    return res;
}

console.log(multiplicacion(5,9, suma));

let sumaFlecha = (a,b) => { 
    return a+b
}

console.log(sumaFlecha(1,2));

sumaFlecha = 10;

console.log(sumaFlecha);

//let sumar = function(){}

function iniciarSaludo(texto){
    return "Hola "+texto;
}

function saludo(msj, callBackTexto){
    return callBackTexto(msj);
}
console.log(saludo("Silvi",texto => "Hola " + texto));

console.log(saludo("Christian",iniciarSaludo));





const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"


array1.forEach(imprimirElemento);


function imprimirElemento(element){
    return console.log(element);
}
for (let i = 0; i < array1.length; i++) {
    imprimirElemento(array1[i]);
}