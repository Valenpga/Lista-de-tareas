import {createContext, useState, useEffect} from 'react';
import {task as data} from '../Data/task';

export const taskContent = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);


    function createTask(task) {
        setTasks([
            ...tasks,
            {
                title: task.title,
                id: task.length,
                description: task.description
            }
        ]);
    }
    function editTask (taskId, updatedTask) {
        setTasks(tasks.map(task => {
            if(task.id === taskId) {
                return{...task,...updatedTask}
            }
            return(task);
        }))
    }
    function deleteTask(taskId) {
        const setTasks = tasks.filter((task) => task.id !== taskId)
    }

    useEffect(() => {
        setTasks(data)
    }, []);

    return(
        <TaskContextProvider 
            value={{
                createTask,
                editTask,
                deleteTask,
            }}

        >
            {props.children}
        </TaskContextProvider>
    )

} 
