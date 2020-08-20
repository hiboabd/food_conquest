import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import '../App.css';

function NavigationBar() {
  return(
    <Navbar className="nav-custom" bg="dark" expand="lg">
      <Navbar.Brand href="#home">Food Conquest</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link data-testid="feed" href="/">Instagram Feed</Nav.Link>
          <Nav.Link data-testid="favourites" href="/favourites">Favourites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;
