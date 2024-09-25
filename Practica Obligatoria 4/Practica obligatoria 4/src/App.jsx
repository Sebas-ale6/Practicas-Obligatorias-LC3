import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer una lista de tareas', completed: true },
    { id: 2, text: 'Pasear al perro', completed: false },
    { id: 3, text: 'Lavar los platos', completed: false },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: tasks.length + 1, text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
