import { useState } from "react";
import Header from "./components/header";
import Tasks from "./components/tasks";
import AddTask from "./components/addTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "UX UI de l'application Wafq",
      date: "12-03-2023",
      statut: true,
    },

    {
      id: 2,
      name: "UX UI de l'application Wafq",
      date: "12-03-2023",
      statut: false,
    },
    {
      id: 3,
      name: "Developpment de la page login",
      date: "12-05-2023",
      statut: true,
    },
  ]);

  // Add Task 

  const addTask = (task) => {
   const id = Math.floor(Math.random()*1000)+1
   const newTask = {id,...task}
   setTasks([...tasks,newTask])
 
  }

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, statut: !task.statut } : task
      )
    );
  };

  // Show addTask 

  const showAddTaskForm = () => {
    setShowAddTask(!showAddTask)
  }
  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={showAddTaskForm} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/> }
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
