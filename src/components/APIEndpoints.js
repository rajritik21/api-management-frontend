import React from 'react';
import { Box, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const APIEndpoints = () => {
  const endpoints = [
    { method: 'POST', endpoint: '/api/auth/register', description: 'Register new user' },
    { method: 'POST', endpoint: '/api/auth/login', description: 'User login' },
    { method: 'GET', endpoint: '/api/tasks', description: 'Get all tasks' },
    { method: 'POST', endpoint: '/api/tasks', description: 'Create new task' },
    { method: 'PUT', endpoint: '/api/tasks/:id', description: 'Update task' },
    { method: 'DELETE', endpoint: '/api/tasks/:id', description: 'Delete task' }
  ];

  return (
    <Box sx={{ p: 3, bgcolor: '#E5EAFF', minHeight: '100vh', marginLeft: '240px' }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>API Endpoints</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Method</TableCell>
              <TableCell>Endpoint</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {endpoints.map((endpoint, index) => (
              <TableRow key={index}>
                <TableCell>{endpoint.method}</TableCell>
                <TableCell>{endpoint.endpoint}</TableCell>
                <TableCell>{endpoint.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default APIEndpoints;