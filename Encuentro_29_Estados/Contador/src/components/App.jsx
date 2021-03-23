import React from "react";

import "../css/App.css";

const App = () => {
  return (
    <div>
      <Contador />
    </div>
  );
};

function Contador(props) {
  return (
    <main className="Application">
      <section className="Counters">
        <div className="Counter">
          <p className="count">0</p>
          <section className="controls">
            <button>Incrementar</button>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
