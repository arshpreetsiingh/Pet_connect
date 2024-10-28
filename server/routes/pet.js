const express = require('express');
const Pet = require('../models/Pet');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new pet (for sellers)
router.post('/create', authMiddleware, async (req, res) => {
  const { name, breed, age, price, description,image } = req.body;

  if (!name || !breed || !age || !price || !description || !image || !email) {
    return res.status(400).json({ msg: 'Please fill in all fields' });
  }

  try {
    const newPet = new Pet({
      name,
      breed,
      age,
      price,
      description,
      image,
      email,
      seller: req.user.id,  // Attaching seller ID from authenticated user
    });

    await newPet.save();
    res.status(201).json({ msg: 'Pet listed successfully', pet: newPet });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch a pet by ID
router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ msg: 'Pet not found' });
    res.json(pet);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
