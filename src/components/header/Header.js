import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../context"
import { translateText } from "../../services/services"
import header from "../../header.jpeg"
import {
  Link
} from "react-router-dom";
import './Header.css'

function Header() {
  const {language, changeLanguage} = useContext(LanguageContext)

  const [searchButtonText, setSearchButtonText] = useState("");
  const [registerButtonText, setRegisterButtonText] = useState("");
  const [languageButtonText, setLanguageButtonText] = useState("");

  useEffect(() => {
    translateText("Søk", "no", language).then(translatedText => {
      setSearchButtonText(translatedText)
    })
    translateText("Registrer vaksine", "no", language).then(translatedText => {
      setRegisterButtonText(translatedText)
    })
    translateText("Språk", "no", language).then(translatedText => {
      setLanguageButtonText(translatedText)
    })
  }, [language])


    return (
      <header>
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img className="logo-image" src={header}></img>
            </Link>
          </div>
          <div className="buttons-container">
            <Link className="button" to="/">{searchButtonText}</Link>
            <Link className="button" to="/vaccine-registration">{registerButtonText}</Link>
            <div class="dropdown">
              <button class="dropbtn">{languageButtonText}</button>
              <div class="dropdown-content">
                <button onClick={() => changeLanguage("no")}>Norsk</button>
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("pl")}>Polskie</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;
