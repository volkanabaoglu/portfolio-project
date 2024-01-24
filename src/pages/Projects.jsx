import {useState} from "react";
import NavbarComponent from "../components/Navbar.jsx";
import Card from "react-bootstrap/Card";
import "../styles/Projects.css";

const Projects = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div>
      <NavbarComponent />

      <br />
      <br />
      <br />

      <div className="cards-projects">
        <Card className="col-md-4 mb-4"
          style={{
            width: "20rem",
            height: "25rem",
            backgroundColor: "transparent",
            border: "none",
            border: "solid 1px gray",
          }}
        >
          <Card.Body style={{filter: isHovered ? 'brightness(180%)' : 'brightness(100%)',transition: 'filter 0.3s ease-in-out'}} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <Card.Title style={{ color: "#c0bebe" }}>
              E-Commerce Platform
            </Card.Title>
            <br />
            <br />
            <Card.Text style={{ color: "#c0bebe" }}>
              Developing an online e-commerce platform using MERN technologies.
              The platform aims to facilitate seamless table sales, integrating
              MongoDB for database management, Express.js for backend
              development, React.js for the user interface, and Node.js for
              server-side scripting. The MERN stack provides a robust and
              efficient solution for building scalable and responsive e-commerce
              applications
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-md-4 mb-4"
          style={{
            width: "20rem",
            height: "25rem",
            backgroundColor: "transparent",
            border: "none",
            border: "solid 1px gray",
          }}
        >
          <Card.Body style={{filter: isHovered ? 'brightness(180%)' : 'brightness(100%)',transition: 'filter 0.3s ease-in-out'}} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <Card.Title style={{ color: "#c0bebe"}}>Rent A Car</Card.Title>
            <br />
            <br />
            <Card.Text style={{ color: "#c0bebe"}}>
              I developed the backend for a rent-a-car website using C#. My
              expertise includes Entity Framework for efficient database
              management, PostgreSQL for data storage, and familiarity with
              design patterns, particularly in the context of the
              Model-View-Controller (MVC) architecture. This project showcases
              my proficiency in C# and my ability to implement robust solutions
              for complex web applications.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-md-4 mb-4"
          style={{
            width: "20rem",
            height: "25rem",
            backgroundColor: "transparent",
            border: "none",
            border: "solid 1px gray",
          }}
        >
          <Card.Body style={{filter: isHovered ? 'brightness(180%)' : 'brightness(100%)',transition: 'filter 0.3s ease-in-out'}} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <Card.Title style={{ color: "#c0bebe" }}>Mekanbul</Card.Title>
            <br />
            <br />
            <Card.Text style={{ color: "#c0bebe"}}>
              I created a web application that lists nearby cafes, displaying
              user reviews and ratings. Leveraging MERN technologies, I
              integrated the Google Maps API to provide location-based
              information. This project showcases my proficiency in building
              interactive and location-aware applications, with a focus on
              user-generated content and dynamic mapping features.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
