import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const Documentation = () => {
  return (
    <Box sx={{ p: 3, bgcolor: '#E5EAFF', minHeight: '100vh', marginLeft: '240px' }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>API Documentation</Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>Authentication</Typography>
        <Typography paragraph>
          All API endpoints require JWT authentication. Include the token in the Authorization header:
          Bearer [your-token]
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>Endpoints</Typography>
        <Typography paragraph>
          Detailed documentation for each endpoint, including request/response formats and examples.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Documentation;