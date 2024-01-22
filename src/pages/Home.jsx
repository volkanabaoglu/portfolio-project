import React from "react";
import NavbarComponent from "../components/Navbar.jsx";
import { Container, Image } from "react-bootstrap";
import "../styles/Home.css"
const Home = () => {
  return (
      <>
      <NavbarComponent />
      <Container className="home-container">
        <Image src="path/to/your/image.jpg" alt="Your Name" roundedCircle />
        <div className="text-container">
          <h1 className="name">Volkan Abaoğlu</h1>
          <p className="developer-title">Junior Web Developer </p>
        </div>
      </Container>
      </>
  );
};

export default Home;
