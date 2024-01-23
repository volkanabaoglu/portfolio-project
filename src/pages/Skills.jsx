import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar.jsx';

const Skills = () => {
  const skillsData = [
    { technology: 'Html', percentage: 80 },
    { technology: 'Css', percentage: 80 },
    { technology: 'React', percentage: 75 },
    { technology: 'Node.js', percentage: 70 },
    { technology: 'MongoDB', percentage: 65 },
    { technology: 'JQuery', percentage: 80 },
    { technology: 'Java', percentage: 60 },
    { technology: 'Sql', percentage: 50 },
  ];

  return (
    <div>
      <NavbarComponent />
      <Container className="mt-5">
        <h2 className='my-skills' style={{color:'white',fontSize:'40px'}}>My Skills</h2>
        <br /><br />
        <Row>
          {skillsData.map((skill, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
             
              <div className="skill-item">
              <br /> <br />
                <h4 className='skill-name' style={{color:'white',fontSize:'30px'}}>{skill.technology}</h4>
                <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} style={{fontSize:'20px'}}  />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
