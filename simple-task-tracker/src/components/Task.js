import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDoubleClick, onDelete }) => {
  return (
    <div
      className={`task ${task.hasReminder && "task--reminder"}`}
      onDoubleClick={() => onDoubleClick(task.name)}
    >
      <div className="task__title">
        <h3>{task.name}</h3>
        <FaTimes className="task__delete" onClick={() => onDelete(task.name)} />
      </div>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
