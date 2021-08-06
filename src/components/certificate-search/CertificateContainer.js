import React, { useState } from "react";
import CertificateSearch from "./CertificateSearch";
import CertificateTable from "./CertificateTable";

function CertificateContainer() {
    const [certificateSearchResult, setCertificateSearchResult] = useState([]);

    return (
        <div>
            <CertificateSearch onSearch={setCertificateSearchResult}/>
            {
                certificateSearchResult && <div>
                Resultat: <CertificateTable certificates={certificateSearchResult}/>
                </div>
            }
        </div>
    );
}

export default CertificateContainer;
