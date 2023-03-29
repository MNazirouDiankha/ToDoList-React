import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const onDeleteTask = () => {
    onDelete(task.id);
  };

  const onToggleTask = () => {
    onToggle(task.id);
  };
  return (
    <div className={`task ${task.statut ? 'reminder' : ''}`} onDoubleClick={onToggleTask}>
      <h3>
        {task.name}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={onDeleteTask}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
