import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ourteam.css';
import arshpreetImg from '../../imgs/aboutus/profile-pic.jpeg';
import yogesh from '../../imgs/aboutus/yogeshimg.jpg';
import deshnajain from '../../imgs/aboutus/deshnaimg.jpeg';
import priyamimg from '../../imgs/aboutus/priyamimg.jpeg';

const teamMembers = [
  {
    name: 'Arshpreet Singh',
    role: 'Team Member',
    description: 'Great, the best, the most amazing person ever',
    img: arshpreetImg,
  },
  {
    name: 'Priyam',
    role: 'Team Member',
    description: "frontend master",
    img: priyamimg,
  },
  {
    name: 'Yogesh',
    role: 'Team Member',
    description: 'Never understand anything',
    img: yogesh,
  },
  {
    name: 'Deshna Jain',
    role: 'Team Member',
    description: 'The slow poke',
    img: deshnajain,
  },
];

const Ourteam = () => {
  const [showDetails, setShowDetails] = useState(Array(teamMembers.length).fill(false));

  const handleClick = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <Container fluid className="p-4 our-team-container">
      <h1 className="text-center mb-4 our-team-heading">Meet Our Team</h1>
      <br></br>
      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="team-card" onClick={() => handleClick(index)}>
              <Card.Img variant="top" src={member.img} alt={member.name} className="team-card-image" />
              {showDetails[index] && (
                <Card.Body className="team-card-body">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.description || 'No description available.'}</Card.Text>
                </Card.Body>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Ourteam;
