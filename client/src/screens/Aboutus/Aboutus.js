import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Aboutus.css';
import Ourteam from '../../components/aboutus/ourteam';
import OurMission from '../../components/aboutus/ourmission';
import OurVision from '../../components/aboutus/Ourvision';
import WhatWeDo from '../../components/aboutus/Whatwedo';
import Aboutusheader from '../../components/aboutus/aboutusheader';
// import Footer from '../../Component/footer/footer';
// import Aboutuscarousel from '../Component/aboutus/aboutuscarousel';

const AboutUs = () => {
  return (
    <>
      {/* <Aboutuscarousel/> */}
      <Container fluid className="about-container">
        <Row className="text-center mb-4">
          <Col>
            <Aboutusheader />
          </Col>
          <Row className="mb-4">
            <Col>
              <WhatWeDo />
            </Col>
          </Row>
        </Row>
        <Row className="mb-4">
          <Col md={6} >
            <OurMission />
          </Col>
          <Col md={6}>
            <OurVision />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Ourteam />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
