import React from "react";
import header from "../../header.jpeg"
import {
  Link
} from "react-router-dom";

function Header() {
    return (
      <header>
        <h1>Norges vaksinetjeneste</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/vaccine-registration">Register vaccine</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;
