import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import APIEndpoints from './components/APIEndpoints';
import Authentication from './components/Authentication';
import APITester from './components/APITester';
import Documentation from './components/Documentation';
import Sidebar from './components/Sidebar';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import { Box } from '@mui/material';

// Add this import
import { TaskProvider } from './context/TaskContext';
import Tasks from './components/Tasks';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Dashboard />
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/endpoints"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <APIEndpoints />
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/auth"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Authentication />
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/tester"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <APITester />
                  </Box>
                </PrivateRoute>
              }
            />
            <Route
              path="/docs"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Documentation />
                  </Box>
                </PrivateRoute>
              }
            />
            <Route path="/tasks"
              element={
                <PrivateRoute>
                  <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Tasks />
                  </Box>
                </PrivateRoute>
              }
            />
            {/* Change this line */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
