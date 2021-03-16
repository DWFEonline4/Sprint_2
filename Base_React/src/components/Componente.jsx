import '../css/Componente.css'


export default function Componente(props) {
    console.log(props.css);
  return (
    <div className={props.css?props.css:'css-default'}>
      <div className="label"><span>Titulo</span></div>
      <img src={props.cover} alt="imagen" />
    </div>
  );
}