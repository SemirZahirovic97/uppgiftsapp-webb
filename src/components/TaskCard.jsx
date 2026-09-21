import { API_URL } from '../api';

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.isDone ? 'Klar' : 'Ej klar'}</p>
      {task.imageUrl && (
        <img src={`${API_URL}${task.imageUrl}`} alt={task.title} />
      )}
    </div>
  );
}

export default TaskCard;