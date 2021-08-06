import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context"
import { translateText } from "../../services/services"
import React from "react";
import header from "../../header.jpeg"
import {
  Link
} from "react-router-dom";
import './Header.css'

function Header() {
  const {language, changeLanguage} = useContext(LanguageContext)

  const [welcomeText, setWelcomText] = useState("");

  useEffect(() => {
    translateText("Hei velkommen til siden", "no", language).then(translatedText => {
      setWelcomText(translatedText)
    })
  }, [language])


    return (
      <header>
          <h1>Norges vaksinetjeneste</h1>
          <div>{welcomeText}</div>
          <button onClick={() => changeLanguage("no")}>Norsk</button>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("pl")}>Polskie</button>
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
