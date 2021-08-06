import React, { useState, useContext, useEffect } from "react";
import CertificateSearch from "./CertificateSearch";
import Certificate from "./Certificate";
import { LanguageContext } from "../../context";
import { translateText } from "../../services/services";

function CertificateContainer() {
    const {language, changeLanguage} = useContext(LanguageContext)

    const [certificateSearchResult, setCertificateSearchResult] = useState({});
    const [resultText, setResultText] = useState("");

    useEffect(() => {
        translateText("Resultat", "no", language).then(translatedText => {
          setResultText(translatedText)
        })
      }, [language])

    return (
        <div>
            <CertificateSearch onSearch={setCertificateSearchResult}/>
            {
                certificateSearchResult && <div>
                {resultText}: <Certificate certificate={certificateSearchResult}/>
                </div>
            }
        </div>
    );
}

export default CertificateContainer;
