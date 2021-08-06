import React, {useState} from "react";
import "./VaccinationForm.css"
import axios from "axios";

function VaccinationForm() {

    const [nationalIdentityNumberInput, setNationalIdentityNumberInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [doseInput, setDoseInput] = useState("");
    const [vaccineTypeInput, setVaccineTypeInput] = useState("");
    const [certificate, setCertificate] = useState(null);

    const handleNationalIdentityNumberChange = (event) => {
        setNationalIdentityNumberInput(event.target.value);
    }

    const handleFirstNameChange = (event) => {
        setFirstNameInput(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastNameInput(event.target.value);
    }

    const handleDoseChange = (event) => {
        setDoseInput(event.target.value);
    }

    const handleVaccineTypeChange = (event) => {
        setVaccineTypeInput(event.target.value);
    }

    const searchClick = ()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/certificates/?nationalIdentityNumber=${nationalIdentityNumberInput}`).then(response => {
            if (response.status === 200) onSearch(response.data);
            else onSearch(null);
        }).catch(() => onSearch(null))
    }

    const submitClick = ()=>{
        console.log(lastNameInput, firstNameInput, nationalIdentityNumberInput, vaccineTypeInput, doseInput, certificate)
        const cert = certificate || {
            firstName: firstNameInput,
            lastName: lastNameInput,
            nationalIdentityNumber: nationalIdentityNumberInput,
            vaccinations: []
        }
        const vaccination = {
            dose: doseInput,
            date: new Date(),
            type: vaccineTypeInput,
            vaccinatorIdentificator: "helsearbeider@fhi.no",
            certificate: cert
        }
        console.log(vaccination);
        axios.post(`${process.env.REACT_APP_BASE_URL}/vaccinations/`, vaccination).then(response => {
            onSubmit(response.status === 200);
        }).catch(() => onSubmit(false))
    }

    const onSubmit = (success) => {
        if(success){
            setCertificate(null);
            setLastNameInput("");
            setVaccineTypeInput("");
            setFirstNameInput("");
            setNationalIdentityNumberInput("");
        }
    }

    const onSearch = result => {
        if(result === null) return;
        if(result.length < 1) return;
        const certificate = result[0];
        console.log(certificate);
        certificate.vaccinations = [];
        setCertificate(certificate)
        setFirstNameInput(certificate.firstName);
        setLastNameInput(certificate.lastName);
    }

    return (
        <div className="vaccination-form">
            <div>
                <label> Fødselsnummer</label> <input className="text-input" type="text" onChange={handleNationalIdentityNumberChange}/>
                <button type="button" onClick={searchClick}>Søk</button>
            </div>
            <div><label>Fornavn</label> <input className="text-input" value={firstNameInput} type="text" onChange={handleFirstNameChange} /></div>
            <div><label>Etternavn</label> <input className="text-input" value={lastNameInput} type="text" onChange={handleLastNameChange} /></div>
            <div onChange={handleDoseChange}>
                <label>Dose</label>
                <div className="radio">
                    <input value= "1" type="radio" name="doseInput" /> 1
                    <input value="2" type="radio" name="doseInput" /> 2
                </div>
            </div>
            <div >
                <label>Vaksinetype</label>
                <select className="dropdown" value={vaccineTypeInput} onChange={handleVaccineTypeChange}>
                    <option value="Pfizer">Pfizer</option>
                    <option value="Moderna">Moderna</option>
                    <option value="Janssen">Janssen</option>
                </select>
            </div>
            <button className="add" type="button" onClick={submitClick}>Legg til</button>
        </div>
    );
}

export default VaccinationForm;
