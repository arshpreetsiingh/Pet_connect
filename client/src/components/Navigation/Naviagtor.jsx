import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from '../NavBar/NavBar';
import Home from '../../screens/Home/Home';
import Login from '../../screens/UserAuth/Login';
import Register from '../../screens/UserAuth/Register';
import PetList from '../../screens/Pets/PetList';
import SellerDashboard from '../../screens/Seller/SellerDashboard';
import PetDetails from '../Pets/PetDetails';
import Footer from '../Footer/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a90e2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function Navigator() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <Container className="flex-grow-1 mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/pets" element={<PetList />} />
              <Route path="/pets/:id" element={<PetDetails />} />
              <Route path="/seller-dashboard" element={<SellerDashboard />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default Navigator;