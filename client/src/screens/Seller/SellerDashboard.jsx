import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from '../../api/axios';

const SellerDashboard = () => {
  const [petDetails, setPetDetails] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    price: '',
    description: '',
    image:''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPetDetails({
      ...petDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/pets/create', petDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Pet added successfully:', res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to list pet. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          List Your Pet for Sale
        </Typography>
        {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Pet Name"
            name="name"
            value={petDetails.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="species"
            label="Species"
            name="species"
            value={petDetails.species}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="breed"
            label="Breed"
            name="breed"
            value={petDetails.breed}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="age"
            label="Age"
            name="age"
            value={petDetails.age}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="Price"
            name="price"
            value={petDetails.price}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="description"
            label="Description"
            name="description"
            value={petDetails.description}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <TextField
            margin="normal"
            id="image"
            label="Image URL"
            name="image"
            value={petDetails.image
            }
            onChange={handleChange}
            multiline
            rows={4}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            List Pet
          </Button>
        </Box>
      </Box>
      </Container>
  );
}

export default SellerDashboard;
    

