import { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskHasReminder, setTaskHasReminder] = useState(false);

  const submitClicked = (event) => {
    event.preventDefault();
    const task = {
      name: taskName,
      date: taskDate,
      hasReminder: taskHasReminder,
    };
    onAdd(task);
  };

  return (
    <form className="flex-col form" onSubmit={submitClicked}>
      <div className="flex-col form__col-control">
        <label>Task</label>
        <input
          type="text"
          required
          placeholder="Add Task"
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="flex-col form__col-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          onChange={(e) => setTaskDate(e.target.value)}
        />
      </div>
      <div className="flex-row form__checkbox-control">
        <label>Set reminder</label>
        <input
          type="checkbox"
          onChange={(e) => setTaskHasReminder(e.target.checked)}
        />
      </div>
      <input
        className="button form__save-task-btn"
        value="Save Task"
        type="submit"
      />
    </form>
  );
};

export default AddTaskForm;
