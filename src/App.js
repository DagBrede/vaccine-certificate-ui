import React from "react"
import './App.css';
import CertificateContainer from "./components/certificate-search/CertificateContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <CertificateContainer />
    </div>
  );
}

export default App;
