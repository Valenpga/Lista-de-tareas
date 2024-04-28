import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import  {TaskContextProvider}  from './Context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>
)
