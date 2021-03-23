import React from "react";

import "../css/App.css";

export default function App() {
  return (
    <div className="App">
      <Bulbs />
    </div>
  );
}

function Bulbs() {
  return (
    <>
      <div className={"bulb-on"} />
      <button>On</button>
      <button>Off</button>
    </>
  );
}
