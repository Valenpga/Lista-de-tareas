
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../Data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState(data);

    function createTask(task) {
        setTasks([
            ...tasks,
            {
                title: task.title,
                id: tasks.length,
                description: task.description
            }
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }


    function editTask(taskId, updatedTask) {
        setTasks(tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task)));
    }
      
    

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
                editTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
