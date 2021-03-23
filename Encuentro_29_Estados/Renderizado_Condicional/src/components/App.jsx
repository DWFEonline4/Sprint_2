import React, {useState} from "react";

import "../css/App.css";

export default function App() {
  return (
    <div className="App">
      <Bulbs />
    </div>
  );
}

function Bulbs() {
  const [on, click] = useState(false);
  let clickOn = ()=>{click(true)}
  let clickOff = ()=>{click(false)}

  return (
    <>
      <div className={on?"bulb-on":"bulb-off"} />
      <button onClick={clickOn}>On</button>
      <button onClick={clickOff}>Off</button>
    </>
  );
}
