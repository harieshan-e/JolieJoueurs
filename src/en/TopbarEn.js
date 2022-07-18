import Container from 'react-bootstrap/Container';
import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


import "react-bootstrap-submenu/dist/index.css";


const TopbarEn = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Changer la langue en Français
    </Tooltip>
  );  
  
  return (

    <Navbar fixed="top" expand="lg"  style={{backgroundColor: "#ff8906"}}>
    <Container className="fs-5">
      <Navbar.Brand href="/" className="fs-4">JolieJoueurs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="/#mission" className="mx-1">Our Mission</Nav.Link>
          <NavDropdown title="Our Teams" className="mx-1" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dota2">Dota 2</NavDropdown.Item>
            <NavDropdown.Item href="/league">League of Legends</NavDropdown.Item>
            <NavDropdown.Item href="/overwatch">Overwatch</NavDropdown.Item>
            <NavDropdown.Item href="/valorant">Valorant</NavDropdown.Item>
            <NavDropdown.Item href="/smash">Super Smash Bros</NavDropdown.Item>
            <NavDropdown.Item href="rocketleague">Rocket League</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/#teams">
              Jump to Section
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/#contact" className="mx-1">Contact Us</Nav.Link>
          <Nav.Link href="/#join" className="mx-1" >Join a Team</Nav.Link>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 500, hide: 400 }}
            overlay={renderTooltip}
          >
            <Nav.Link href="/" className="mx-1" >
          <i class="bi bi-globe2"></i> Fr</Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
 
export default TopbarEn;
