import NavbarComponent from "../components/Navbar.jsx";
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NoPage = () => {
  return (
    <div>
      <NavbarComponent />
      return (
      <Container className="mt-5">
        <Row>
          <Col className="text-center" >
            <h1 style={{color:'white'}}>404 - Page Not Found</h1>
            <p style={{color:'white',fontSize:'40px'}}>The page you are looking for might be in another castle.</p>
            <Link to="/">
              <Button variant="primary">Go Home</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      );
    </div>
  );
};

export default NoPage;
