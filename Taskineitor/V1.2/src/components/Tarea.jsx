import '../css/Tarea.css';
export default function Tarea(props) {
  return (
    <div className="task">
      <div className="left">
        <span className="titulo">{props.titulo}</span>
        <span className="fecha">{calcularFecha(props.fechaCreada)}</span>
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
  const fecha = new Date(date);
  const hoy = new Date();
  if(fecha < hoy)//Validar las fechas
    return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - Hace ${(hoy-fecha)} días`;
  else
  return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - Hoy`;
}