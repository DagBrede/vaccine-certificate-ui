import React, {useEffect, useState} from "react";
import axios from "axios";
import "./CertificateSearch.css"
import { BsSearch } from 'react-icons/bs';

function CertificateSearch({ onSearch }) {

    const [searchInput, setSearchInput] = useState("");

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
              <input class="Search-bar" type="text" value={searchInput} placeholder={"Søk etter vaksinasjoner (fødselsnummer)"} onChange={handleChange} />
              {//<button onClick={handleOnClick} class="Search-button"><BsSearch/> </button>
              }
          </div>
      </>
    );

}

export default CertificateSearch;
