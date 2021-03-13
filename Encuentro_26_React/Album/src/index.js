import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//Puedo importar el componente Album
import Album from './components/Album';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1>Invocando directamente a Album</h1>
    <Album
        css="clase-dinamica album-container"
        artista="Roxas"
        titulo="Nuevo Titulo"
        fecha="2021"
        cover="https://img.discogs.com/gShU8r63R83YRZB9p7082qlByRg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13419543-1553855000-5926.jpeg.jpg"
        agrupacion="grupo"
        genero="pop"
      />
  </React.StrictMode>,
  document.getElementById('root')
);
