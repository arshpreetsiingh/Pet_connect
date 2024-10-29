import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ourvision.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHandsHelping ,faClover } from '@fortawesome/free-solid-svg-icons';

const OurVision = () => {
  return (
    <Container fluid className="our-vision-container">
      <Row >
        <Col >
          <h2 className="our-vision-heading">Our Vision</h2>
          <p className="our-vision-text">
          Through innovative technology and compassionate support, we aim to break down barriers to mental health care. Our mission is to create a global network of understanding and empowerment. By connecting individuals with resources and each other, we strive to nurture resilience and personal growth.       
          </p>
          <br></br>
          <p className="our-vision-text">
Empower individuals to take charge of their emotional well-being. By leveraging technology and human connection, we aspire to cultivate a global community where compassion, understanding, and personal growth flourish, ultimately leading to happier.
</p>
        </Col>
      </Row>
      <Row className="icons">
        <Col md={4} className="our-vision-icon-container">
          <div className="our-vision-icon">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <p className="our-vision-icon-text">Global Reach</p>
        </Col>
        <Col md={4} className="our-vision-icon-container">
          <div className="our-vision-icon">
            <FontAwesomeIcon icon={faHandsHelping} />
          </div>
          <p className="our-vision-icon-text">Supportive Community</p>
        </Col>
        <Col md={4} className="our-vision-icon-container">
          <div className="our-vision-icon">
            <FontAwesomeIcon icon={faClover} />
          </div>
          <p className="our-vision-icon-text">Connection</p>
        </Col>
      </Row>
    </Container>
  );
};

export default OurVision;
