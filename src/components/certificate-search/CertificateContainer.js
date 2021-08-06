import React, { useState, useContext, useEffect } from "react";
import CertificateSearch from "./CertificateSearch";
import { LanguageContext } from "../../context";
import { translateText } from "../../services/services";
import CertificateTable from "./CertificateTable";

function CertificateContainer() {
    const [certificateSearchResult, setCertificateSearchResult] = useState([]);
    const {language, changeLanguage} = useContext(LanguageContext)
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
                {resultText}: <CertificateTable certificates={certificateSearchResult}/>
                </div>
            }
        </div>
    );
}

export default CertificateContainer;
