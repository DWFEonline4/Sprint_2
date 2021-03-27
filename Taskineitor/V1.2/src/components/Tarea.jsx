import '../css/Tarea.css';
export default function Tarea(props) {
  return (
    <div className="task">
      <div className="left">
        <span className="titulo">{props.titulo}</span>
        <span className="fecha">{props.fechaCreada}</span><span className="fecha fecha_dias">{calcularFecha(props.fechaCreada.split('/'))}</span>
        <span className="cat_desc">Categoria:</span>
        <span className="categoria">{props.categoria}</span>
      </div>
      <div className="right">
        {checkBox(props.completada)}
        <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png"/>
      </div>
    </div>
  );
}

function checkBox(complet){
  if(complet)
    return(<input type="checkbox" checked/>);
  else
    return(<input type="checkbox"/>);
}

function calcularFecha(date){
  const fecha = new Date(date[2], date[1], date[0])
  const hoy = new Date();
  let diferencia = hoy.getTime() - fecha.getTime();
  let diferenciaDias = Math.floor(diferencia / (1000 * 3600 * 24));
  return diferenciaDias>0?` - Hace ${diferenciaDias} días`:' - Hoy';
}