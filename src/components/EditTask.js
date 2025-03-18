import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';

const EditTask = ({ task, onUpdate, onCancel }) => {
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description
  });
  const { token } = useAuth();
  const { updateTask } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(token, task._id, editedTask);
    onUpdate();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Title"
        value={editedTask.title}
        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Description"
        value={editedTask.description}
        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button type="submit" variant="contained">Save</Button>
        <Button onClick={onCancel} variant="outlined">Cancel</Button>
      </Box>
    </Box>
  );
};

export default EditTask;