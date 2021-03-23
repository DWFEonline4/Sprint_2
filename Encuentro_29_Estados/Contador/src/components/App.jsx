import React, {useState} from "react";

import "../css/App.css";

const App = () => {
  return (
    <div>
      <Contador />
    </div>
  );
};

function Contador(props) {
  const [contador, incrementarContador] = useState(0);
  let incrementar = ()=>{incrementarContador(contador+1)}
  return (
    <main className="Application">
      <section className="Counters">
        <div className="Counter">
          <p className="count">{contador}</p>
          <section className="controls">
            <button onClick={incrementar}>Incrementar</button>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
