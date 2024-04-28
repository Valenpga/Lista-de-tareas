
import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Escribe tu tarea"
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Escibe aquí tu descripción"
                onChange={(e) => setDescription(e.target.value)}
                value={description}  
            ></textarea>
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;
