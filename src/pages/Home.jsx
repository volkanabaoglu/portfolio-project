import React from "react";
import NavbarComponent from "../components/Navbar.jsx";
import { Container, Image } from "react-bootstrap";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Container className="home-container">
        <Image src="/images/pp-pp.jpg" alt="volkanabaoglu" roundedCircle  style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "50%", 
            marginBottom: "20px", 
          }}/>
        <div className="text-container">
          <h1 className="name">Volkan Abaoğlu</h1>
          <p className="developer-title">Junior Web Dev... </p>
        </div>
      </Container>
    </>
  );
};

export default Home;
