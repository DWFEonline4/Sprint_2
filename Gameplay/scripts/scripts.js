import {megastofeles, obtenerEscudo} from "./megastofeles.js";
import {lazy, obtenerTijera} from "./lazy.js";
import {unitornio, obtenerGlobo} from "./unitornio.js";
import {burlon, obtenerLinterna} from "./burlon.js";
import {zombie, obtenerEstaca} from "./zombie.js";

const TESORO="tesoro";
const BATALLA="batalla";

let jugador = {
    belleza:25,
    fuerza:25,
    carisma:25,
    inteligencia:25,
    total:100,
    armas:[]
};
var nivel=1;

let resultadoEncuentro = function(){
    return aleatorio(2)===0?TESORO:BATALLA;
}

let aleatorio = (max)=>{
    return Math.floor(Math.random() * Math.floor(max));
}

function jugar(){
    let jefe=aleatorio(5);
    let encuentro=resultadoEncuentro();
    console.log(jefe);
    console.log(encuentro);
    switch (jefe) {
        case 0:
            if(encuentro===TESORO){
                jugador = obtenerEscudo(jugador);
            }else{
                jugador = megastofeles(jugador);
            }
            break;
        case 1:
            jugador = encuentro===TESORO?obtenerTijera(jugador):lazy(jugador);
            break;
        case 2:
            if (encuentro===BATALLA)
                jugador=unitornio(jugador);
            else
                jugador=obtenerGlobo(jugador);
            break;
        case 3:
            if (encuentro===BATALLA) jugador=burlon(jugador);
            else jugador=obtenerLinterna(jugador);
            break;
        case 4:
            jugador = encuentro===BATALLA?zombie(jugador):obtenerEstaca(jugador);
            break;
        default:
            break;
    }
    
    console.log(jugador);

    if(jugador.total>0){
        if(nivel<10){
            nivel++;
            jugar();
        }else{
            console.log("Ganaste");
        }
    }else{
        alert("Game Over en el nivel " + nivel);
        console.log("Game Over");
    }
}

((texto)=>{
    console.log(texto);
    console.log(jugador.total);
    jugar();
})("Inicio el juego");