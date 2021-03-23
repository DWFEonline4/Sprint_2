import React, { useState } from "react";
import "../css/App.css"

export default function App() {
  return (
    <div>
      <Checkbox />
    </div>
  );
}

function Checkbox() {
  let infoEstado = useState(false);
  console.log(infoEstado);

  let valorActual = infoEstado[0];
  let actualizarEstado = infoEstado[1];

  console.log("el valor actual es: " + valorActual);

  const manejarCambio = (event) => {
    console.log("se disparo el evento onChange...");
    if (valorActual === true) {
      actualizarEstado(false);
    } else {
      actualizarEstado(true);
    }
  };

  return (
    <>
      <label htmlFor="checkbox">Checkbox con Reack</label>
      <input id="checkbox" checked={valorActual} onChange={manejarCambio} type="checkbox" />
    </>
  );
}
