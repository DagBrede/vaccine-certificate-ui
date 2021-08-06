import React from "react"
import './App.css';
import CertificateContainer from "./components/certificate-search/CertificateContainer";
import VaccinationForm from "./components/add-vaccination/VaccinationForm";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <VaccinationForm />
    </div>
  );
}

export default App;
