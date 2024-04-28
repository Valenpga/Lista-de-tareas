
import React from 'react'
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import { TaskContextProvider } from './Context/TaskContext';

function App() {
    return (
        <TaskContextProvider>
            <div>
                <TaskForm />
                <TaskList />
            </div>
        </TaskContextProvider>
    );
}

export default App;
