import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import NavbarComponent from "../components/Navbar.jsx";

const Skills = () => {
  const skillsData = [
    { technology: "Html", percentage: 80 },
    { technology: "Css", percentage: 80 },
    { technology: "React", percentage: 75 },
    { technology: "Node.js", percentage: 70 },
    { technology: "MongoDB", percentage: 65 },
    { technology: "JQuery", percentage: 80 },
    { technology: "Java", percentage: 60 },
    { technology: "Sql", percentage: 50 },
  ];

  return (
    <div className="skills-main">
      <NavbarComponent />
      <Container className="container-class mt-5">
        <h2 className="my-skills" style={{ color: "white", fontSize: "22px" , paddingBottom:'10px' }}>
          My Skills
        </h2>
        <Row className="mx-auto">
          {skillsData.map((skill, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-3" style={{paddingTop:'15px'}}>
              <div className="skill-item">
                <h4
                  className="skill-name"
                  style={{ color:'whitesmoke', fontSize: "22px" }}
                >
                  {skill.technology}
                </h4>
                <ProgressBar
                  now={skill.percentage}
                  label={`${skill.percentage}%`}
                  style={{ fontSize: "20px" , width:'400px' }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
