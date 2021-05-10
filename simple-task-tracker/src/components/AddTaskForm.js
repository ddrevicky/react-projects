const AddTaskForm = () => {
  return (
    <form className="flex-col form" onSubmit="">
      <div className="flex-col form__col-control">
        <label>Task</label>
        <input type="text" required placeholder="Add Task" />
      </div>
      <div className="flex-col form__col-control">
        <label>Day & Time</label>
        <input type="text" required placeholder="Add Day & Time" />
      </div>
      <div className="flex-row form__checkbox-control">
        <label>Set reminder</label>
        <input type="checkbox" />
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
