import React from "react"
import './App.css';
import Header from "./components/header/Header";
import Search from "./pages/search"
import Register from "./pages/register"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route path="/vaccine-registration">
              <Register />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
