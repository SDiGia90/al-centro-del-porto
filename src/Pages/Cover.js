//Libs
import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

//Local
import "./Cover.css";
import logo from "../Pages/logo.png";
import italian from "../Pages/it.png";
import english from "../Pages/gb.png";
import Home from "./Home";

export default function Cover() {
  const [engLang, setEngLang] = useState(false);
  const [click, setClick] = useState(false);
  
  return (
    <div className="container-fluid">
      <Router>
        {click === false ? (
          <>
            <img
              className="logo"
              src={logo}
              width="60%"
              alt="Al centro del Porto"
            />
            <div className="container">
              <Link to="/Home" className="itflag">
                <button className="btn">
                  <img
                    className="itflag"
                    src={italian}
                    alt="Italian"
                    a
                    href="/"
                    onClick={() => {
                      setEngLang(false);
                      setClick(true);
                    }}
                  />
                </button>
              </Link>
              <Link to="/Home" className="enflag">
                <button className="btn">
                  <img
                    className="enflag"
                    src={english}
                    alt="English"
                    onClick={() => {
                      setEngLang(true);
                      setClick(true);
                    }}
                  />
                </button>
              </Link>
            </div>
          </>
        ) : (
          <Switch>
            <Route exact path="/Home">
              <Home eng={engLang} />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}
