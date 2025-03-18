import React, { useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, Typography, Paper, FormControl, InputLabel } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const APITester = () => {
  const { token } = useAuth();
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('');
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState(null);

  const handleTest = async () => {
    try {
      const config = {
        method: method,
        url: endpoint,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      if (method !== 'GET' && requestBody) {
        config.data = JSON.parse(requestBody);
      }

      const result = await axios(config);
      setResponse(result.data);
    } catch (error) {
      setResponse(error.response?.data || { error: 'Request failed' });
    }
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#E5EAFF', minHeight: '100vh', marginLeft: '240px' }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>API Tester</Typography>
        
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Method</InputLabel>
          <Select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            label="Method"
          >
            <MenuItem value="GET">GET</MenuItem>
            <MenuItem value="POST">POST</MenuItem>
            <MenuItem value="PUT">PUT</MenuItem>
            <MenuItem value="DELETE">DELETE</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="API Endpoint"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          sx={{ mb: 2 }}
          placeholder="http://localhost:5001/api/tasks"
        />

        <TextField
          fullWidth
          label="Request Body (JSON)"
          multiline
          rows={4}
          value={requestBody}
          onChange={(e) => setRequestBody(e.target.value)}
          sx={{ mb: 2 }}
          disabled={method === 'GET'}
        />

        <Button 
          variant="contained" 
          onClick={handleTest}
          sx={{ mb: 2 }}
        >
          TEST ENDPOINT
        </Button>

        {response && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Response:</Typography>
            <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {JSON.stringify(response, null, 2)}
              </pre>
            </Paper>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default APITester;