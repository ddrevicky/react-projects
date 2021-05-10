import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const initialTasks = [
  {
    name: "Pickup groceries",
    date: "Thursday 24th May 18:00",
    hasReminder: false,
  },
  { name: "Dentist", date: "Friday 25th May 10:00", hasReminder: true },
  {
    name: "Meeting with Jeff",
    date: "Friday 25th May 12:00",
    hasReminder: false,
  },
  {
    name: "Trip with Stan and Carol",
    date: "Saturday 26th May 14:00",
    hasReminder: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = () => {
    // TODO: Change state of showAddForm
    console.log(`Add task click`);
  };
  const deleteTask = (taskName) => {
    // TODO: Delete task on click
    console.log(`Delete ${taskName} pressed`);
  };

  const toggleReminder = (taskName) => {
    console.log(`task ${taskName} toglged`);
    setTasks(
      tasks.map((task) =>
        task.name === taskName
          ? { ...task, hasReminder: !task.hasReminder }
          : task
      )
    );
    // console.log(event);
    // TODO: Set hasReminder state on double click
    // console.log(`Double click task`);
  };

  console.log(tasks);

  return (
    <div className="container">
      <Header title="Task Trackaa" onClick={addTask} />
      <AddTaskForm />
      <TaskList
        tasks={tasks}
        onDoubleClick={toggleReminder}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
