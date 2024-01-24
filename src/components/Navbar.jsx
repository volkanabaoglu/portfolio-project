import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import "../styles/NavbarComponent.css";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => {
    setExpanded(false);
  };

  const downloadCV = () => {
    const cvPath = "volkanabaoglu-cv.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "volkanabaoglu-cv.pdf";
    link.click();
  };

  return (
    <div>
      <Navbar bg="none" variant="dark" expand="lg" expanded={expanded} collapseOnSelect>
        <Container>
          <Navbar.Brand style={{ fontSize: '30px' , fontFamily:'Cursive' }}>VOLKAN ABAOGLU</Navbar.Brand>

          <NavbarToggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

          <NavbarCollapse id="basic-navbar-nav">
            {expanded ? (
              <Nav className="ml-auto" style={{ marginRight: '0px', padding: '20px', fontSize: '25px', gap: '30px' }}>
              <Nav.Link href="/" onClick={handleNavClose}>Home</Nav.Link>
              <Nav.Link href="about" onClick={handleNavClose}>About Me</Nav.Link>
              <Nav.Link href="skills" onClick={handleNavClose}>Skills</Nav.Link>
              <Nav.Link href="projects" onClick={handleNavClose}>Projects</Nav.Link>
              <Nav.Link href="contact" onClick={handleNavClose}>Contact</Nav.Link>
              <Nav.Link href="contact" onClick={handleNavClose}>Contact</Nav.Link>
            </Nav>
            )   : (
              <Nav className="ml-auto" style={{ marginRight: '0px',marginLeft:'350px', padding: '15px', fontSize: '20px', gap: '50px' , alignItems:'center',justifyContent:'center'}}>
              <Nav.Link href="/" onClick={handleNavClose}>Home</Nav.Link>
              <Nav.Link href="about" onClick={handleNavClose}>AboutMe</Nav.Link>
              <Nav.Link href="skills" onClick={handleNavClose}>Skills</Nav.Link>
              <Nav.Link href="projects" onClick={handleNavClose}>Projects</Nav.Link>
              <Nav.Link href="/" onClick={downloadCV}>Download CV</Nav.Link>
            </Nav>
            )}
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
