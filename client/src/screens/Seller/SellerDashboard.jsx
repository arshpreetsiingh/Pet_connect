// SellerDashboard.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert, Snackbar } from '@mui/material';
import { Email } from '@mui/icons-material';
import axios from '../../api/axios';
import './SellerDashboard.css';

const SellerDashboard = () => {
  const [petDetails, setPetDetails] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    price: '',
    description: '',
    image: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setPetDetails({
      ...petDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!petDetails.name || !petDetails.species || !petDetails.price || !petDetails.email) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      await axios.post('/api/pets/create', petDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSnackbarOpen(true);
      setPetDetails({
        name: '',
        species: '',
        breed: '',
        age: '',
        price: '',
        description: '',
        image: '',
        email: ''
      });
    } catch (err) {
      setError('Failed to list pet. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="sm" className="dashboard-container">
      <Box className="dashboard-box">
        <Typography component="h1" variant="h4" className="dashboard-title">
          List Your Pet for Sale
        </Typography>
        {error && <Alert severity="error" className="dashboard-alert">{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} className="dashboard-form">
          <TextField
            required
            fullWidth
            label="Pet Name"
            name="name"
            value={petDetails.name}
            onChange={handleChange}
            className="form-field"
          />
          <TextField
            required
            fullWidth
            label="Species"
            name="species"
            value={petDetails.species}
            onChange={handleChange}
            className="form-field"
          />
          <TextField
            fullWidth
            label="Breed"
            name="breed"
            value={petDetails.breed}
            onChange={handleChange}
            className="form-field"
          />
          <TextField
            fullWidth
            label="Age (in years)"
            name="age"
            type="number"
            value={petDetails.age}
            onChange={handleChange}
            className="form-field"
          />
          <TextField
            required
            fullWidth
            label="Price ($)"
            name="price"
            type="number"
            value={petDetails.price}
            onChange={handleChange}
            className="form-field"
          />
          <TextField
            required
            fullWidth
            label="Contact Email"
            name="email"
            type="email"
            value={petDetails.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: <Email sx={{ mr: 1 }} color="action" />
            }}
            className="form-field"
          /><TextField
          fullWidth
          label="Image URL"
          name="image"
          value={petDetails.image}
          onChange={handleChange}
          className="form-field"
        />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={petDetails.description}
            onChange={handleChange}
            multiline
            rows={4}
            className="form-field"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit-button"
          >
            List Pet
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Pet listed successfully!"
        className="snackbar-success"
      />
    </Container>
  );
};

export default SellerDashboard;
