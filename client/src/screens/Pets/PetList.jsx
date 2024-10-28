import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import placeholder from '../../img/placeholder.png';
import './PetList.css';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axios.get('/api/pets');
        setPets(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPets();
  }, []);

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" className="pet-list-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Available Pets
      </Typography>
      <TextField
        fullWidth
        label="Search pets"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
      />
      <Grid container spacing={4}>
        {filteredPets.map((pet) => (
          <Grid item key={pet._id} xs={12} sm={6} md={4}>
            <Card className="pet-card">
              <CardMedia
                component="img"
                className="pet-card-media"
                image={pet.image || placeholder}
                alt={pet.name}
              />
              <CardContent className="pet-card-content">
                <Typography variant="h5" component="div" className="pet-card-title">
                  {pet.name}
                </Typography>
                <Typography variant="body2" className="pet-card-details">
                  Species: {pet.species}
                </Typography>
                <Typography variant="body2" className="pet-card-details">
                  Breed: {pet.breed}
                </Typography>
                <Typography variant="body2" className="pet-card-details">
                  Age: {pet.age} years
                </Typography>
                <Typography variant="body2" className="pet-card-details">
                  Price: ${pet.price}
                </Typography>
                <Button
                  component={Link}
                  to={`/pets/${pet._id}`}
                  size="small"
                  color="primary"
                  className="pet-card-button"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PetList;
