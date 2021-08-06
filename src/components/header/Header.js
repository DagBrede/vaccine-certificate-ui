import React from "react";
import header from "../../header.jpeg"
import {
  Link
} from "react-router-dom";
import './Header.css'

function Header() {
    return (
      <header>
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img className="logo-image" src={header}></img>
            </Link>
          </div>
          <div className="buttons-container">
            <Link className="button" to="/">Søk</Link>
            <Link className="button" to="/vaccine-registration">Registrer vaksine</Link>
          </div>
        </div>
      </header>
    );
}

export default Header;
