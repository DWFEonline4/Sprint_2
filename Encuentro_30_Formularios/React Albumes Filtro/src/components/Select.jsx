import React, { useState } from "react";

export default function Select(prop){
    prop.albumes.map((item)=>generarArregloGenero(item));
    const[valor, cambioValor] = useState(prop.valor);
    let cambioDeValor= (e)=>{
        cambioValor(e.target.value);
        prop.click(e.target.value, prop.tipo);
    }
    return (
        <select id={prop.key} value={valor} onChange={cambioDeValor}>
            <option value="">{prop.tipo}</option>
            {generos.map((item)=>{
                return(
                    <option value={item}>{item}</option>
                )
            })}
        </select>
    )
}
let generos=[];

function generarArregloGenero(item){
    if(generos.indexOf(item.genero)<0){
        generos.push(item.genero);
    }
}