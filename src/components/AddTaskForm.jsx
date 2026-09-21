import { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) {
      return;
    }
    const success = await onAdd({ title, description, isDone: false });
    if (success) {
      setTitle('');
      setDescription('');
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Beskrivning"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default AddTaskForm;