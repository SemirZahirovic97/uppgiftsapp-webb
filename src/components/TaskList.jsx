import TaskCard from './TaskCard';

function TaskList({ tasks, onUpdate }) {
  if (tasks.length === 0) {
    return <p>Inga uppgifter ännu.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default TaskList;