import '../css/App.css'
import corazonVacio from "../img/corazon-vacio.svg";

export default function Album(props) {
    console.log(props.css);
  return (
    <div className={props.css?props.css:'album-container'}>
      <img height="100%" src={props.cover} alt="cover" />
      <div className="album-contenido">
        <div className="album-descripcion">
          <div>
            <h3 className="album-titulo">{props.artista}</h3>

            <h4 className="artista-tipo">{props.agrupacion}</h4>

            <h4 className="album-subtitulo">{props.titulo}</h4>
            <h4 className="album-subtitulo">
              <span className="cronologia">({props.fecha})</span>
            </h4>
          </div>
        </div>
        <div className="album-pie">
          <span className="genero">{props.genero}</span>
          <span>
            <img height="23px" src={corazonVacio} alt="noAmo" />
          </span>
        </div>
      </div>
    </div>
  );
}