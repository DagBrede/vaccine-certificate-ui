import React from "react";

function Certificate({ certificate }) {
    return (
        <div>
            <span>{certificate?.id} </span>
            <span>{certificate?.firstName} </span>
            <span>{certificate?.lastName} </span>
            <span>{certificate?.vaccinated}</span>
        </div>
    );
}

export default Certificate;
