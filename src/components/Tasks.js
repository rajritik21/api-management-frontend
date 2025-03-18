import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTask from './EditTask';
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import axios from 'axios'; // Add this import

const Tasks = () => {
  const { token } = useAuth();
  const { tasks, fetchTasks, addTask, deleteTask } = useTasks();
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    if (token) {
      fetchTasks(token);
    }
  }, [token, fetchTasks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(token, newTask);
    setNewTask({ title: '', description: '' });
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleUpdate = async (updatedTask) => {
    await fetchTasks(token);
    setEditingTask(null);
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#E5EAFF', minHeight: '100vh', marginLeft: '240px' }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>Add New Task</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained">Add Task</Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>Tasks</Typography>
        <List>
          {tasks.map((task) => (
            <ListItem key={task._id}>
              {editingTask && editingTask._id === task._id ? (
                <EditTask 
                  task={task}
                  onUpdate={handleUpdate}
                  onCancel={() => setEditingTask(null)}
                />
              ) : (
                <>
                  <ListItemText
                    primary={task.title}
                    secondary={task.description}
                  />
                  <ListItemSecondaryAction>
                    <IconButton 
                      edge="end" 
                      onClick={() => handleEdit(task)}
                      sx={{ mr: 1 }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      edge="end" 
                      onClick={() => deleteTask(token, task._id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Tasks;