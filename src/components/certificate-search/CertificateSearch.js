import React, {useEffect, useState} from "react";
import axios from "axios";

function CertificateSearch({ onSearch }) {

    const [searchInput, setSearchInput] = useState("");

    useEffect( () => {

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
    }, [onSearch, searchInput])

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    return (
      <>
          <label>
              Søk:
              <input type="string" value={searchInput} onChange={handleChange}/>
          </label>
      </>
    );

}

export default CertificateSearch;
