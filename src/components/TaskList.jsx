import TaskCard from './TaskCard';

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p>Inga uppgifter ännu.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;