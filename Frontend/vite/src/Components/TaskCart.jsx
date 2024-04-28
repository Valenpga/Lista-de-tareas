
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const TaskCart = ({ task }) => {
    const { deleteTask } = useContext(TaskContext);
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    );
}

export default TaskCart;
