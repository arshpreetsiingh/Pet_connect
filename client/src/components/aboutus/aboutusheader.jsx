import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage1 from '../../imgs/aboutus/Screenshot 2024-07-28 162852.png'; 
import AboutImage2 from '../../imgs/aboutus/Screenshot 2024-07-28 162847.png'; 
import './aboutheader.css';

const AboutUsHeader = () => {
  return (  
    <Container fluid className="about-container-header">
      <Row className="align-items-center">
        <Col md={7}>     
            <p className="about-details">
              Serenity Connect is dedicated to providing a supportive and safe space for mental health support. We believe in fostering a community where everyone can find the resources they need to thrive.
            </p>
        </Col>
        <Col md={5}>
        <div className="about-image-container" >
            <img src={AboutImage1} alt="About Us" className="initial-image" />
            <img src={AboutImage2} alt="About Us Hover" className="hover-image" />
            </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUsHeader;
