import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom'; // Add Link here
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../context/AuthContext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ 
      width: 240, 
      bgcolor: '#1A1F2B', 
      color: 'white',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold' }}>
        API Dashboard
      </Typography>
      <List sx={{ flex: 1 }}>
        <ListItem button component={Link} to="/dashboard" sx={{ color: 'white' }}>
          <ListItemIcon><DashboardIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/endpoints" sx={{ color: 'white' }}>
          <ListItemIcon><CodeIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="API Endpoints" />
        </ListItem>
        <ListItem button component={Link} to="/auth" sx={{ color: 'white' }}>
          <ListItemIcon><SecurityIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Authentication" />
        </ListItem>
        <ListItem button component={Link} to="/tester" sx={{ color: 'white' }}>
          <ListItemIcon><BuildIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="API Tester" />
        </ListItem>
        <ListItem button component={Link} to="/docs" sx={{ color: 'white' }}>
          <ListItemIcon><DescriptionIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Documentation" />
        </ListItem>
        <ListItem button component={Link} to="/tasks" sx={{ color: 'white' }}>
          <ListItemIcon><AssignmentIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
      </List>
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)', mt: 'auto' }} />
      <Button
        onClick={handleLogout}
        startIcon={<LogoutIcon />}
        sx={{
          color: 'white',
          textAlign: 'left',
          padding: '12px 24px',
          justifyContent: 'flex-start',
          textTransform: 'none',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.1)',
          }
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;