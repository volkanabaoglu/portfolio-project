import React from "react";
import NavbarComponent from "../components/Navbar.jsx";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({name:'',email:'',message:''});
    alert("Message didn't send. (This field is still under development !)")
    // send to api in this section
  };
  return (
    <div className="contact-main">
      <NavbarComponent />
      <br />
      <br />
      <div className="form-contact">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control style={{padding:'20px'}}
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{padding:'20px'}}
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control style={{padding:'20px'}}
              as="textarea"
              rows={3}
              placeholder="Type your message here"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{fontSize:'24px' , padding:'10px',marginTop:'30px',width:'120px'}}>
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
