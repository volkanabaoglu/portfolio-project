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
        <br />
        <br />
        <br />
        <br />

        <div className="aboutme-p">
          <p>
            Hello, I'm Volkan, a computer engineering student, and I'm
            interested in web development, automation systems, and database
            management. I aim to define myself as a full-stack developer using
            React and Java technologies, and I'm working towards this goal.
          </p>
          <br />
          <p>
            These days, I've been working on developing clone applications and
            trying to improve myself by sharing my code on GitHub. Additionally,
            I'm actively attending an English course to improve my language
            skills.
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
