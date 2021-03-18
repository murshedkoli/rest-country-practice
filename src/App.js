import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menubar from './Component/Menubar';
import SingleCountry from './Component/SingleCountry';
import Home from './Component/Home';
import CountryDetails from './Component/CountryDetails';



function App() {

  return (

    <Router>
      <Menubar></Menubar>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetails></CountryDetails>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
        {/* <Route path="*">
          <SingleCountry></SingleCountry>
        </Route> */}
      </Switch>
    </Router>
    
  );
}

export default App;
