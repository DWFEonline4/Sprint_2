import React, { useState } from "react";
import "../css/App.css";
import Album from "./Album";
import Select from "./Select";
import { albumes } from "../data/albumes.js";

export default function App() {
  const [albunesFilter, filtrar] = useState(albumes);
  const filter = (filtro, prop)=>{
    filtro!==""?
      filtrar(albumes.filter((item)=>item[prop]===filtro)):
      filtrar(albumes);
  }
  return (
    <div>
      <Select key={"select-genero"} click={filter} tipo={"genero"} albumes={albumes}/>
      {albunesFilter.map((album) => {
        return (         
          <Album
            key={album.id}
            artista={album.artista}
            titulo={album.titulo}
            fecha={album.lanzamiento}
            portada={album.portada}
            genero={album.genero}
            agrupacion={album.agrupacion}
          />
        );
      })}
    </div>
  );
}