import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const TASKS_URL = "http://localhost:3043/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addFormShown, setAddFormShown] = useState(false);

  // Get initial tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(TASKS_URL);
    if (res.status !== 200) {
      alert("Error fetching tasks.");
      return;
    }
    const tasks = await res.json();
    return tasks;
  };

  const fetchTask = async (taskId) => {
    const res = await fetch(`${TASKS_URL}/${taskId}`);
    if (res.status !== 200) {
      alert("Error fetching task.");
      return;
    }
    const task = await res.json();
    return task;
  };

  const toggleAddFormShown = () => setAddFormShown(!addFormShown);

  const addTask = async (task) => {
    const res = await fetch(TASKS_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    if (res.status !== 201) {
      alert("Error adding task.");
      return;
    }

    const newTask = await res.json();
    console.log("newTask");
    console.log(newTask);
    setTasks([...tasks, newTask]);
    setAddFormShown(false);
  };

  const deleteTask = async (taskId) => {
    const res = await fetch(`${TASKS_URL}/${taskId}`, { method: "DELETE" });
    if (res.status !== 200) {
      alert("Error deleting task.");
      return;
    }

    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleReminder = async (taskId) => {
    const task = await fetchTask(taskId);
    const updatedTask = { ...task, hasReminder: !task.hasReminder };
    const res = await fetch(`${TASKS_URL}/${taskId}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    if (res.status !== 200) {
      alert("Error updating task.");
      return;
    }

    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
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
