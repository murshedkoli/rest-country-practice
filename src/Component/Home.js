import React from 'react';
import { useEffect, useState } from 'react';
import SingleCountry from './SingleCountry';

const Home = () => {

    
const [countries, setCountries] = useState([]);

useEffect(() =>{

      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))

}, [])
console.log(countries)
    return (
        <div>
             <div  className="CountryPage">
        {
          countries.map(country => <SingleCountry country ={country}></SingleCountry> )
        }

      </div>
        </div>
    );
};

export default Home;