import Container from 'react-bootstrap/Container';
import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


import "react-bootstrap-submenu/dist/index.css";


const Topbar = () => {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Change language to English
    </Tooltip>
  );
    return (

    <Navbar fixed="top" expand="lg"  style={{backgroundColor: "#ff8906"}}>
    <Container className="fs-5">
      <Navbar.Brand href="/" className="fs-4">JolieJoueurs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="/#mission" className="mx-1">Notre Mission</Nav.Link>
          <NavDropdown title="Nos Équipes" className="mx-1" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dota2">Dota 2</NavDropdown.Item>
            <NavDropdown.Item href="/league">League of Legends</NavDropdown.Item>
            <NavDropdown.Item href="/overwatch">Overwatch</NavDropdown.Item>
            <NavDropdown.Item href="/valorant">Valorant</NavDropdown.Item>
            <NavDropdown.Item href="/smash">Super Smash Bros</NavDropdown.Item>
            <NavDropdown.Item href="rocketleague">Rocket League</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/#teams">
              Sauter au Section
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/#contact" className="mx-1">Contactez Nous</Nav.Link>
          <Nav.Link href="/#join" className="mx-1" >Rejoignez une Équipe</Nav.Link>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 500, hide: 400 }}
            overlay={renderTooltip}
          >
            <Nav.Link href="/en" className="mx-1" >
          <i class="bi bi-globe2"></i> En</Nav.Link>
          </OverlayTrigger>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
 
export default Topbar;

