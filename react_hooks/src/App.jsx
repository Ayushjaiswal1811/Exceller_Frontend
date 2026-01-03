import React from 'react'
import ButtonAdd from './components/Button';
import Form from './components/Form';
import TodoList from './components/TodoList';
import "./App.css"
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.jsx';
function App() {
  return <RouterProvider router={router} />
}

export default App
