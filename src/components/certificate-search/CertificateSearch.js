import React, { useState, useContext, useEffect} from "react";
import axios from "axios";
import "./CertificateSearch.css"
import { BsSearch } from 'react-icons/bs';
import { LanguageContext } from "../../context";
import { translateText } from "../../services/services";

function CertificateSearch({ onSearch }) {

    const {language, changeLanguage} = useContext(LanguageContext)

    const [searchBarText, setSearchBarText] = useState("");
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        translateText("Søk etter vaksinasjoner (fødselsnummer)", "no", language).then(translatedText => {
          setSearchBarText(translatedText)
        })
      }, [language])

    useEffect( () => {
        if(searchInput) {

        let isnum = /^\d+$/.test(searchInput);
        if (isnum) {
            axios.get(`${process.env.REACT_APP_BASE_URL}/certificates?nationalIdentityNumber=${searchInput}`).then(response => {
                if (response.status === 200) onSearch(response.data);
                else onSearch(null);
            }).catch(() => onSearch(null))
        }
        else if (typeof searchInput === 'string'){
            axios.get(`${process.env.REACT_APP_BASE_URL}/certificates?name=${searchInput}`).then(response => {
                if (response.status === 200) onSearch(response.data);
                else onSearch(null);
            }).catch(() => onSearch(null))
            }
        }
        else {
            axios.get(`${process.env.REACT_APP_BASE_URL}/certificates`).then(response => {
                if (response.status === 200) onSearch(response.data);
                else onSearch(null);
            }).catch(() => onSearch(null))
        }
    }, [onSearch, searchInput])

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }


    return (
      <>
      <div class="Search-bar-container">
              <input class="Search-bar" type="text" value={searchInput} placeholder={searchBarText} onChange={handleChange} />
              {//<button onClick={handleOnClick} class="Search-button"><BsSearch/> </button>
              }
          </div>
      </>
    );

}

export default CertificateSearch;
