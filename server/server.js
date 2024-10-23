const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const petRoutes = require('./routes/pet');
const connectDB = require('./config/connect');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/auth', authRoutes);  // For user authentication (register, login)
app.use('/api/pets', petRoutes);   // For pet listing (protected by authentication)

app.get('/', (req, res) => {
  res.send('Welcome to the Pet Marketplace API');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
