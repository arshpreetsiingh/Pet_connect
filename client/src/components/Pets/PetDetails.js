import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box, CircularProgress, Grid, IconButton } from '@mui/material';
import { Email, Share, ContentCopy } from '@mui/icons-material';
import axios from '../../api/axios';
import placeholder from '../../imgs/placeholder.png'; // Ensure this file exists
import './PetDetails.css';

const PetDetails = () => {
  const [pet, setPet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await axios.get(`/api/pets/${id}`);
        setPet(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPet();
  }, [id]);

  if (!pet) return (
    <Container className="pet-details-container">
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ mt: 2 }}>Loading pet details...</Typography>
    </Container>
  );

  const handleShare = () => {
    const petUrl = `${window.location.origin}/pets/${pet._id}`;
    navigator.clipboard.writeText(petUrl);
    alert('Pet details link copied to clipboard!');
  };

  return (
    <Container maxWidth="md" className="pet-details-container">
      <Card className="pet-details-card">
        <CardMedia
          component="img"
          height="400"
          image={pet.image || placeholder}
          alt={pet.name}
          className="pet-details-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" align="center">
            {pet.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">Species:</Typography>
              <Typography variant="body1" color="text.secondary">{pet.species}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Breed:</Typography>
              <Typography variant="body1" color="text.secondary">{pet.breed}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Age:</Typography>
              <Typography variant="body1" color="text.secondary">{pet.age} years</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Price:</Typography>
              <Typography variant="body1" color="text.secondary">${pet.price}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Description:</Typography>
              <Typography variant="body1" paragraph>{pet.description}</Typography>
            </Grid>
          </Grid>

          <Box className="pet-details-actions">
            <Button
              variant="contained"
              startIcon={<Email />}
              href={`mailto:${pet.email}?subject=Inquiry about ${pet.name}`}
              className="contact-button"
            >
              Contact Seller
            </Button>
            <Box className="icon-buttons">
              <IconButton color="primary" onClick={handleShare}>
                <ContentCopy />
              </IconButton>
              <IconButton color="primary" onClick={() => alert("Sharing to social media coming soon!")}>
                <Share />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PetDetails;
