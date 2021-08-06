import React, { useState } from "react"
import './App.css';
import Header from "./components/header/Header";
import Search from "./pages/search"
import { LanguageContext } from "./context"
import Register from "./pages/register"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    const [language, setLanugage] = useState("no")

    const changeLanguage = (newLanguage) => {
        setLanugage(newLanguage);
    }

    return (
        <Router>
            <div className="App">
                <LanguageContext.Provider value={{language, changeLanguage}}>
                    <Header />
                    <Switch>
                        <Route path="/vaccine-registration">
                            <Register />
                        </Route>
                        <Route path="/">
                            <Search />
                        </Route>
                    </Switch>
                </LanguageContext.Provider>
            </div>
        </Router>
    );
}

export default App;