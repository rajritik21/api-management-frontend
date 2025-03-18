import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';

const StatCard = ({ icon, title, value, color }) => (
  <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
    <Box sx={{ bgcolor: color, p: 1, borderRadius: 1 }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">{title}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Box>
  </Paper>
);

const Dashboard = () => {
  return (
    <Box sx={{ p: 3, bgcolor: '#E5EAFF', minHeight: '100vh', marginLeft: '240px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <StatCard
            icon={<BoltIcon sx={{ color: 'white' }} />}
            title="API Requests"
            value="256"
            color="#6B8AFF"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            icon={<CheckCircleIcon sx={{ color: 'white' }} />}
            title="Success Rate"
            value="98.5%"
            color="#4CAF50"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            icon={<TimerIcon sx={{ color: 'white' }} />}
            title="Avg. Response Time"
            value="85ms"
            color="#FFC107"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard
            icon={<GroupIcon sx={{ color: 'white' }} />}
            title="Active Users"
            value="18"
            color="#7C4DFF"
          />
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>API Documentation</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Welcome to your API Dashboard! Here you can manage your API endpoints, test them, and handle authentication.
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>Getting Started</Typography>
            <Typography component="ol" sx={{ pl: 2 }}>
              <li>Create API endpoints in the API Endpoints section</li>
              <li>Generate and manage JWT tokens in the Authentication section</li>
              <li>Test your endpoints with different HTTP methods in the API Tester section</li>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;