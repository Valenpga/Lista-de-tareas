
import TaskCart from "./TaskCart";
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskList() {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1>La lista de tareas está vacía</h1>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskCart key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;

