import React from 'react'
import "./App.css"
import Taskitem from './Components/Taskitem'
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.jsx';
function App() {
  return <RouterProvider router={router} />
}

export default App
