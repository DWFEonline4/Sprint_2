import React from "react";
import "../css/App.css";
import Album from "./Album"
import { albumes } from "../data/albumes.js";

export default function App() {
  return (
    <div>
      {albumes.map((album) => {
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

