import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const Menubar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
   <Link to="/home"> <Navbar.Brand >Rest Country ApI</Navbar.Brand></Link>
    <Nav className="mr-auto">
    <Link to="/home"> <Navbar.Brand >Home</Navbar.Brand></Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
};

export default Menubar;