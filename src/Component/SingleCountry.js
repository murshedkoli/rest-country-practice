import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './CountryDetails.css'

const singleCountry = (props) => {

    const {name, flag, alpha2Code, currencies, numericCode,population, region } = props.country;
    console.log(currencies)
    return (
        <div>
          <Card style={{ width: '25rem', float:'left', padding:'10px', margin:'10px' }}>
  <Card.Img style={{ height: '200px' }} variant="top" src={flag} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Alpha2Code : {alpha2Code}</ListGroupItem>
    <ListGroupItem>numericCode : {numericCode}</ListGroupItem>
    <ListGroupItem>population: {population}</ListGroupItem>
    <ListGroupItem>region: {region}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Link to={`/country/${name}`}><Card.Link >Show Details</Card.Link></Link>
  </Card.Body>
</Card>
        </div>
    );

};

export default singleCountry;