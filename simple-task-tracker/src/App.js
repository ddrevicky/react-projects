import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const initialTasks = [
  {
    id: 2,
    name: "Pickup groceries",
    date: "Thursday 24th May 18:00",
    hasReminder: false,
  },
  { id: 3, name: "Dentist", date: "Friday 25th May 10:00", hasReminder: true },
  {
    id: 4,
    name: "Meeting with Jeff",
    date: "Friday 25th May 12:00",
    hasReminder: false,
  },
  {
    id: 5,
    name: "Trip with Stan and Carol",
    date: "Saturday 26th May 14:00",
    hasReminder: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [addFormShown, setAddFormShown] = useState(false);

  const toggleAddFormShown = () => setAddFormShown(!addFormShown);
  const addTask = (task) => {
    setTasks([...tasks, task]);
    setAddFormShown(false);
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const toggleReminder = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, hasReminder: !task.hasReminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onToggleAddFormShown={toggleAddFormShown}
        addFormShown={addFormShown}
      />
      {addFormShown && <AddTaskForm onAdd={addTask} />}
      <TaskList
        tasks={tasks}
        onDoubleClick={toggleReminder}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
