import React, { useState } from "react";
import CertificateSearch from "./CertificateSearch";
import Certificate from "./Certificate";

function CertificateContainer() {
    const [certificateSearchResult, setCertificateSearchResult] = useState({});

    return (
        <div>
            <CertificateSearch onSearch={setCertificateSearchResult}/>
            {
                certificateSearchResult && <div>
                Resultat: <Certificate certificate={certificateSearchResult}/>
                </div>
            }
        </div>
    );
}

export default CertificateContainer;
