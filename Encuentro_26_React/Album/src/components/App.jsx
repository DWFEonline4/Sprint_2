import '../css/App.css';
import Album from './Album';

export default function App() {
  return (
    <div className="App">
      <Album
        artista="Rozes"
        titulo="Under the Grave"
        fecha="2016"
        cover="https://img.discogs.com/gShU8r63R83YRZB9p7082qlByRg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13419543-1553855000-5926.jpeg.jpg"
        agrupacion="solista"
        genero="dance"
      />
    </div>
  );
}