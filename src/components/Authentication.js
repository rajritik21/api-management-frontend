import React, { useState } from 'react';
import { Box, Button, Typography, Paper, TextField } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Authentication = () => {
  const { token } = useAuth();
  const [jwtToken, setJwtToken] = useState('');

  const handleGenerateToken = () => {
    setJwtToken(token);
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#E5EAFF', minHeight: '100vh', marginLeft: '240px' }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>Authentication</Typography>
        
        <Button 
          variant="contained" 
          onClick={handleGenerateToken}
          sx={{ mb: 3 }}
        >
          GENERATE JWT TOKEN
        </Button>

        <Typography variant="h6" sx={{ mb: 1 }}>JWT Token</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={jwtToken}
          InputProps={{
            readOnly: true,
          }}
          sx={{
            '& .MuiInputBase-input': {
              fontFamily: 'monospace',
              wordBreak: 'break-all'
            }
          }}
        />
      </Paper>
    </Box>
  );
};

export default Authentication;