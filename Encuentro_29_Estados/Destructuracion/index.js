//###Destructuring en Objetos###
const carro= {
    pasajeros:5,
    color: "rojo",
    encendido:true,
    marca:"kia"
}

let {marca, pasajeros, color} = carro;

console.log(`El color del carro es ${color}`);
console.log(`La marca del carro es ${marca}`);
console.log("El número de pasajeros es: "+pasajeros);
console.log("###Destructuring en Arreglos###");
//###Destructuring en Arreglos###
const frutas=["manzana", 100, "banana", "piña", true];
//let        [      XXX,    ,      YYY,    ZZZ] = frutas;
let[XXX,,YYY,ZZZ,otraVariable,unaMas] = frutas;

console.log(XXX);
console.log(YYY);
console.log(ZZZ);
console.log(otraVariable);
console.log(unaMas);

console.log("###Destructuring en funciones + Objeto###");
//###Destructuring en funciones + Objeto###
function objeto(){
    return {
        pasajeros2:7,
        color: "rojo",
        encendido2:false,
        marca:"kia",
        puertas:(estilo)=>{
            if(estilo==="QP")
                return 3;
            else
                return 5;
            }
    }
}
console.log(objeto());
let {pasajeros2, encendido2, puertas} = objeto();
console.log(pasajeros2);
console.log(encendido2);
console.log(puertas("QP"));
console.log(puertas("Sedan"));

console.log("###Destructuring en funciones + Arreglo###");
//###Destructuring en funciones + Arreglo###
let arreglo = ()=>{
    const varArreglo="arreglo";
    return ["Silvi" , "Rocío", "Araceli", "Vanessa"];
}
console.log(arreglo());
let [valor1, valor2, ,valor3] = arreglo();
let {varArreglo}=arreglo();
console.log(varArreglo);
console.log(valor1);
console.log(valor2);
console.log(valor3);