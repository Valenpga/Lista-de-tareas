
import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskCard({ task }) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const { deleteTask, editTask } = useContext(TaskContext);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, {
      title: editedTitle,
      description: editedDescription,
    });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditing(false);
  };

  return (
    <div className="task-card">
      {editing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
