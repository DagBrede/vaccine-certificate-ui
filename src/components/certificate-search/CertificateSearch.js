import React, {useEffect, useState} from "react";
import axios from "axios";
import "./CertificateSearch.css"
import { BsSearch } from 'react-icons/bs';

function CertificateSearch({ onSearch }) {

    const [searchInput, setSearchInput] = useState("");

    useEffect( () => {
    }, [onSearch, searchInput])

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }
    const handleOnClick = (event) =>{
        if(searchInput) {
            axios.get(`${process.env.REACT_APP_BASE_URL}/certificates/${searchInput}`).then(response => {
                if (response.status === 200) onSearch(response.data);
                else onSearch(null);
            }).catch(() => onSearch(null))
        }
    }


    return (
      <>
      <div class="Search-bar-container">
              <input class="Search-bar" type="text" value={searchInput} placeholder={"Søk etter vaksinasjoner (fødselsnummer)"} onChange={handleChange} />
              <button onClick={handleOnClick} class="Search-button"><BsSearch/> </button>
          </div>
      </>
    );

}

export default CertificateSearch;
