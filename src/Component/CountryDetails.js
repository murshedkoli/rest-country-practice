import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState({});

    const {name, topLevelDomain, flag } = country;
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))

    }, [])

    return (
        <div style={{display:'flex'}}>
            <div style={{width:'70%', textAlign:'center'}}>
            <h1>Name : {name}</h1>
            <img src={flag} alt=""/>

            </div>
            <div style={{width:'25%'}}>
            <Table  striped bordered hover style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th style={{textAlign:'center'}} colSpan="2"><h2>Others Details</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>topLevelDomain</td>
                        <td>{topLevelDomain}</td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    );
};

export default CountryDetails;