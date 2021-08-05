import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context"
import { translateText } from "../../services/services"

function Header() {
  const {language, changeLanguage} = useContext(LanguageContext)

  const [welcomeText, setWelcomText] = useState("");

  useEffect(() => {
    translateText("Hei velkommen til siden", "no", language).then(translatedText => {
      console.log(translatedText)
      setWelcomText(translatedText)
    })
  }, [])


    return (
      <header>
          <h1>Norges vaksinetjeneste</h1>
          <div>{welcomeText}</div>
      </header>
    );
}

export default Header;
