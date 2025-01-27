import React, { useState, useEffect, useContext } from 'react';
import { Container, Box, Typography, TextField, Button, Paper, Table, TableHead, TableBody, TableRow, TableCell, Alert } from '@mui/material';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import './Support.css'; // Import CSS for styling

const Support = () => {
  const { user } = useContext(AuthContext); // Get user information (e.g., role)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '', // Added for registration
  });
  const [isRegister, setIsRegister] = useState(false); // Toggle between Sign In and Register
  const [newcomers, setNewcomers] = useState([]); // State to store newcomer registrations
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch newcomer registrations if the user is an admin
  useEffect(() => {
    if (user?.role === 'admin') {
      const fetchNewcomers = async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/newcomers'); // Replace with your API endpoint
          const data = await response.json();
          setNewcomers(data);
          setLoading(false);
        } catch (error) {
          setError('Failed to load newcomer registrations.');
          setLoading(false);
        }
      };
      fetchNewcomers();
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log('Register Data:', formData);
      // Add registration logic here
    } else {
      console.log('Sign In Data:', formData);
      // Add authentication logic here
    }
  };

  return (
    <Container
      sx={{
        py: 6,
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: 'md',
      }}
    >
      {/* Title Section */}
      <Box
        textAlign="center"
        sx={{
          mb: 6,
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 600, color: '#0d6efd', mb: 2 }}>
          Join the Zoe Fellowship Family 
        </Typography>
        <Typography variant="h6" sx={{ color: '#555', lineHeight: 1.6, fontWeight: 400, mb: 3 }}>
          No matter where you are on your spiritual journey, Zoe Fellowship welcomes you with open arms. Come and experience God’s love, guidance, and power in an atmosphere where lives are transformed, faith is renewed, and hearts are refined.
        </Typography>
      </Box>

      {/* Login/Register Section */}
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: '12px',
          mb: 4,
          backgroundColor: '#ffffff',
        }}
      >
        <Typography variant="h5" textAlign="center" sx={{ mb: 3, fontWeight: 600,color: '#0d6efd' }}>
          {isRegister ? 'Register an Account' : 'Login to Your Account'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
          {isRegister && (
            <TextField
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
          )}
          <TextField
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, py: 1.5, fontSize: '1rem', fontWeight: 'bold' }}
          >
            {isRegister ? 'Register' : 'Sign In'}
          </Button>
        </Box>
        <Button
          variant="text"
          onClick={() => setIsRegister(!isRegister)}
          sx={{ mt: 2, fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'none' }}
        >
          {isRegister ? 'Already have an account? Sign In' : 'Don’t have an account? Register'}
        </Button>
      </Paper>

      {/* Admin-only Newcomer Registrations */}
      {user?.role === 'admin' && (
        <Box
          sx={{
            mt: 6,
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Newcomer Registrations
          </Typography>

          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : newcomers.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Registration Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newcomers.map((newcomer) => (
                  <TableRow key={newcomer.id}>
                    <TableCell>{newcomer.name}</TableCell>
                    <TableCell>{newcomer.email}</TableCell>
                    <TableCell>{newcomer.phone}</TableCell>
                    <TableCell>{new Date(newcomer.registrationDate).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Typography>No newcomers registered yet.</Typography>
          )}
        </Box>
      )}
    </Container>
  );
};

export default Support;