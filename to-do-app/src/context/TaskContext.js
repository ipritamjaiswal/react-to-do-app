import { createContext, useState, useEffect } from 'react';

// Create the context
export const TaskContext = createContext();

// Provide the context to children
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    // Load from localStorage on initial render
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    // Save task to localStorage when tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, []);

    // Task operations
    const addTask = (task) => {
        setTasks([...tasks, {id: Date.now(), title: task, isCompleted: false}]);
    };

    const editTask = (id, newTitle) => {
        setTasks(tasks.map(task => task.id === id ? {...task, title: newTitle} : task));
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, isCompleted: !isCompleted} : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const moveTaskup = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [[updatedTasks[index]], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    };

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    // Provide state and functions to all components
    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, toggleTaskCompletion, deleteTask, moveTaskup, moveTaskDown }}>
            {children}
        </TaskContext.Provider>
    );
};