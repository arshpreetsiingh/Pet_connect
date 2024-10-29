import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ourmission.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faLock, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

const OurMission = () => {
  return (
    <Container fluid className="our-mission-container">
      <Row >
        <Col>
          <h2 className="our-mission-heading">Our Mission</h2>
          <p className="our-mission-text">
            At Serenity Connect, our mission is to provide a supportive and safe space for individuals seeking mental health support. 
            We aim to connect people with the resources and communities they need to thrive. 
            Our platform is built on the principles of compassion, confidentiality, and community.
          </p>
          <br>
          </br>
          <p className="our-mission-text">
            We believe that mental health is just as important as physical health, and we are committed to breaking the stigma around mental health issues. 
            Through our platform, we strive to create a world where everyone feels empowered to seek help and support for their mental well-being.
          </p>
        </Col>
      </Row>
      <Row className="icons">
        <Col md={4} className="our-mission-icon-container">
          <div className="our-mission-icon">
            <FontAwesomeIcon icon={faHandHoldingHeart}  />
          </div>
          <p className="our-mission-icon-text">Support</p>
        </Col>
        <Col md={4} className="our-mission-icon-container">
          <div className="our-mission-icon">
            <FontAwesomeIcon icon={faLock}  />
          </div>
          <p className="our-mission-icon-text">Safety</p>
        </Col>
        <Col md={4} className="our-mission-icon-container">
          <div className="our-mission-icon">
            <FontAwesomeIcon icon={faPeopleArrows} />
          </div>
          <p className="our-mission-icon-text">Connection</p>
        </Col>
      </Row>
    </Container>
  );
};

export default OurMission;
