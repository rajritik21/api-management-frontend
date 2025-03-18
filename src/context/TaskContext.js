import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (token) => {
    try {
      const response = await axios.get('http://localhost:5001/api/tasks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (token, task) => {
    try {
      await axios.post('http://localhost:5001/api/tasks', task, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks(token);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (token, taskId, updatedTask) => {
    try {
      await axios.put(`http://localhost:5001/api/tasks/${taskId}`, updatedTask, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await fetchTasks(token); // Refresh the tasks list after update
    } catch (error) {
      console.error('Error updating task:', error);
      throw error; // Propagate error to component
    }
  };

  const deleteTask = async (token, taskId) => {
    try {
      await axios.delete(`http://localhost:5001/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Refresh tasks list after deletion
      await fetchTasks(token);
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);