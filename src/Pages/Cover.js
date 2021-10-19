import React from "react";
import "./Cover.css";
import logo from "../Pages/logo.png"
import italian from "../Pages/it.png"
import english from "../Pages/gb.png"
export default function Cover() {
  return (
    <div className="container-fluid">
      <img className="logo" src={logo} width="60%" alt="Al centro del Porto" />
      <div className="container">
        <button className="btn">
        <img className="itflag" src={italian} alt="Italian" onClick={italian} />
      </button>
      <button className="btn">
        <img className="enflag"src={english} alt="English" onClick={english} />
      </button>
      </div>
    </div>
  );
}
