import {useContext} from "react";
import { TaskContext } from "../Context/TaskContext.jsx";

const TaskCarts = ({task, onEditTask, onCompleteTask, onDeleteTask}) => {
    const onDeleteTask = useContext(TaskContext)
    return(
        <div>
            <h3>{task.title}</h3>,
            <p>{task.description}</p>,

            <button onClick={() =>onEditTask(task.id)}>Editar</button>,
            <button onClick={() =>onCompleteTask(task.id)}>Completar</button>,
            <button onClick={() =>onDeleteTask(task.id)}>Eliminar</button>
        </div>

    )
}

export default TaskCarts;

