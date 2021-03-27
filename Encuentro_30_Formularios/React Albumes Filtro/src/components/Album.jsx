import React from "react";
import "../css/App.css";

export default function Album(props) {
  function eventoImagen(nombre){
    console.log(nombre);
    alert(nombre.titulo);
  }
  return (
    <div className="album-container">
      <img height="100%" src={props.portada} alt="tf" onClick={()=>{eventoImagen(props)}} />
      <div className="album-contenido">
        <div className="album-descripcion">
          <h3 className="album-titulo">{props.artista}</h3>
          <h4 className="album-subtitulo">{props.titulo}</h4>
          <h4 className="album-subtitulo">
            ({props.fecha}) - <span className="cronologia">Hace x años</span>
          </h4>
        </div>
        <div className="album-pie">
          <span className="genero">{props.genero}</span>
        </div>
      </div>
    </div>
  );
}
