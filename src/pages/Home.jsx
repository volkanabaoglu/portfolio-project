import React, { useState } from "react";
import NavbarComponent from "../components/Navbar.jsx";
import { Container, Image } from "react-bootstrap";
import "../styles/Home.css";

const Home = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <NavbarComponent />
      <Container className="home-container">
        <Image
          src="/images/pp-pp.png"
          alt="volkanabaoglu"
          roundedCircle
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "90%", 
            marginBottom: "20px", 
            border: 'solid 1px gray',
            filter: isHovered ? 'brightness(120%)' : 'brightness(100%)',
            transition: 'filter 0.3s ease-in-out',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="text-container">
          <h1 className="name">Volkan Abaoglu</h1>
          <p className="developer-title">Junior Web Dev... </p>
        </div>
      </Container>
    </>
  );
};

export default Home;
