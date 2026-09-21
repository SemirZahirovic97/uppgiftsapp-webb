import TaskCard from './TaskCard';

function TaskList({ tasks, onUpdate, onUpload }) {
  if (tasks.length === 0) {
    return <p>Inga uppgifter ännu.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onUpload={onUpload}
        />
      ))}
    </div>
  );
}

export default TaskList;