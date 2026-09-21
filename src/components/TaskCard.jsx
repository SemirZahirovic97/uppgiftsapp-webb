import { useState } from 'react';
import { API_URL } from '../api';

function TaskCard({ task, onUpdate, onUpload }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  async function toggleDone() {
    await onUpdate({ ...task, isDone: !task.isDone });
  }

  async function save() {
    if (!title.trim()) {
      return;
    }
    const success = await onUpdate({ ...task, title, description });
    if (success) {
      setIsEditing(false);
    }
  }

  function cancel() {
    setTitle(task.title);
    setDescription(task.description);
    setIsEditing(false);
  }

  async function handleFile(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    await onUpload(task.id, file);
    event.target.value = '';
  }

  if (isEditing) {
    return (
      <div className="task-card">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="card-buttons">
          <button onClick={save}>Spara</button>
          <button className="secondary" onClick={cancel}>Avbryt</button>
        </div>
      </div>
    );
  }

  return (
    <div className="task-card">
      <h3 className={task.isDone ? 'done' : ''}>{task.title}</h3>
      <p>{task.description}</p>
      <label className="done-label">
        <input type="checkbox" checked={task.isDone} onChange={toggleDone} />
        Klar
      </label>
      {task.imageUrl && (
        <img src={`${API_URL}${task.imageUrl}`} alt={task.title} />
      )}
      <label className="upload">
        Ladda upp bild
        <input type="file" accept="image/*" onChange={handleFile} />
      </label>
      <div className="card-buttons">
        <button onClick={() => setIsEditing(true)}>Redigera</button>
      </div>
    </div>
  );
}

export default TaskCard;