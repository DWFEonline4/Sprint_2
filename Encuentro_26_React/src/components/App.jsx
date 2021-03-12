import '../css/App.css'

export default function App() {
  return (
    <div>
      <h1>Instancia aquí tus operaciones matemáticas:</h1>
      <h2>Suma</h2>
      <Suma num1={5} num2={7} />
      <h2>Resta</h2>
      <Resta num1={8} num2={3} />
      <h2>División</h2>
      <Division num1={9} num2={3} />
      <h2>Multiplicación</h2>
      <Multiplicacion num1={5} num2={7} />
      <h2>Extra extra, ejecución de un ciclo para tabla de multiplicar del 4</h2>
      {tablasDeMultiplicar(4)} 
    </div>
  );
}
/*También funcion flecha*/
let tablasDeMultiplicar = (num)=>{
  let res=[];
  for (let i = 1; i < 11; i++) {
    res.push(<Multiplicacion num1={num} num2={i} />)    
  }
  return res;
}

function Suma(props) {
  return <div>La sumatoria de {props.num1} + {props.num2} es: {props.num1 + props.num2}</div>;
}

// Crea un componente que reste dos números ➖ e instancialo en la función App
function Resta(data) {
  return <div>La resta de {data.num1} + {data.num2} es: {data.num1 - data.num2}</div>;
}
// Crea un componente que divida dos números ➗ e instancialo en la función App
function Division(object) {
  return <div>La división de {object.num1} / {object.num2} es: {object.num1 / object.num2}</div>;
}
// Crea un componente que múltiplique dos números  ✖️ e instancialo en la función App
function Multiplicacion(e) {
  return <div>La Multiplicación de {e.num1} x {e.num2} es: {e.num1 * e.num2}</div>;
}
/**
 * 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
 *
 * Challenge bonus:
 *
 * ¿Puedes hacer que en tus componentes se vean los números que
 * estan siendo sumados?
 *
 * Por ejemplo, para <Suma num1={4} num2={3}/>
 * mostrar un mensaje que diga:
 *
 * La sumatoria de 4 + 3 es 7.
 *
 * Realiza esto para el resto de tus componentes aritméticos.
 *
 * 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
 */
