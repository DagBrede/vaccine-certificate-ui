import React, { useState } from "react"
import './App.css';
import Header from "./components/header/Header";
import Search from "./pages/search"
import { LanguageContext } from "./context"

function App() {
  const [language, setLanugage] = useState("no")

  const changeLanguage = (newLanguage) => {
    setLanugage(newLanguage);
  }

  return (
    <div class="App">
      <LanguageContext.Provider value={{language, changeLanguage}}>
        <Header />
        <Search />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
