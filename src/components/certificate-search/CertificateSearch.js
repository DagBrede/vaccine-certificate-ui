import React, {useEffect, useState} from "react";
import axios from "axios";

function CertificateSearch({ onSearch }) {

    const [searchInput, setSearchInput] = useState("");

    useEffect( () => {
        if(searchInput) {
            axios.get(`${process.env.REACT_APP_BASE_URL}/certificates/${searchInput}`).then(response => {
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
              Søk sertifikat id:
              <input type="number" value={searchInput} onChange={handleChange}/>
          </label>
      </>
    );

}

export default CertificateSearch;
