import React, {useState} from "react";
import "../css/Corazon.css";
import amo from "../img/corazon-full.svg";
import noAmo from "../img/corazon-vacio.svg";

export default function Corazon(props) {
    const [roto, actualizarCorazon] = useState(props.roto);
    let clickCorazon=()=>{
        props.eventoDeLosCorazones(!roto);
        actualizarCorazon(!roto);
    }
    return (
      <div className="corazon-container" key={props.key}>
        <img onClick={clickCorazon} src={roto?noAmo:amo} height="40px" alt="amo" />
      </div>
    );
  }