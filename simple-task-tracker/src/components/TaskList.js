import Task from "./Task";

const TaskList = ({ tasks, onDoubleClick, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length ? (
        tasks.map((task, idx) => (
          <Task
            key={idx}
            task={task}
            onDoubleClick={onDoubleClick}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
};

export default TaskList;
