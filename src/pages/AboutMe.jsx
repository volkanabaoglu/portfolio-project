import React from "react";
import NavbarComponent from "../components/Navbar.jsx";
import "../styles/AboutMe.css";
import Button from "react-bootstrap/Button";

const AboutMe = () => {
  const downloadCV = () => {
    const cvPath = "volkanabaoglu-cv.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "volkanabaoglu-cv.pdf";
    link.click();
  };

  return (
    <>
      <NavbarComponent />
      <div className="aboutme-container">        

        <div className="aboutme-p">
          <p>
            Hello, I'm Volkan, a senior computer engineering student at Süleyman
            Demirel University. My passion lies in web development, automation
            systems, and database management. Currently, I am actively engaged
            in creating a dynamic e-commerce platform using MERN (MongoDB,
            Express.js, React, Node.js) technologies. This project serves as a
            practical avenue for honing my skills in technologies such as
            Node.js and Redux.
          </p>
          <br />
          <p>
            In addition to my academic pursuits, I am dedicated to becoming a
            proficient full-stack developer, specializing in React and Java
            technologies. To further enhance my expertise, I regularly
            contribute to GitHub by sharing my code and collaborating on clone
            applications. As a continual learner, I am actively enrolled in an
            English course, striving to improve my language skills for effective
            communication in the tech community.
          </p>
          <p>
            I am enthusiastic about the prospect of combining my academic
            knowledge with real-world application, and I am always eager to
            explore new technologies and methodologies. Feel free to explore my
            GitHub repository to witness my ongoing journey in the world of
            programming.
          </p>
        </div>
        <Button
          variant="dark"
          onClick={downloadCV}
          className="mx-auto"
          style={{
            fontSize: "35px",
            backgroundColor: "whitesmoke",
            color: "darkblue",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "whitesmoke")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "lightgray")}
        >
          DOWNLOAD CV
        </Button>
      </div>
    </>
  );
};

export default AboutMe;
