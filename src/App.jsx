import { useEffect, useState } from 'react';
import { API_URL } from './api';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch(`${API_URL}/api/tasks`);
        if (!response.ok) {
          throw new Error('Servern svarade med fel');
        }
        const data = await response.json();
        setTasks(data);
        setError('');
      } catch {
        setError('Kunde inte hämta uppgifter. Kontrollera att API:et körs.');
      }
    }

    loadTasks();
  }, []);

  return (
    <div className="app">
      <h1>Mina uppgifter</h1>
      {error && <div className="error">{error}</div>}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;