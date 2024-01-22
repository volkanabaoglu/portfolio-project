import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{fontSize:'25px'}}>VOLKAN ABAOĞLU</Navbar.Brand>
          <Nav className="ml-auto" style={{ marginRight: '30px', 
        padding:'10px', fontSize:'25px' }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About Me</Nav.Link>
            <Nav.Link href="skills">Skills</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
