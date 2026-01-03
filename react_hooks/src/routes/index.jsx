
import {createBrowserRouter, Navigate, Outlet} from "react-router-dom"
import Form from "../components/Form"
import TodoList from "../components/TodoList"
import Layouts from "./Layouts"
import ButtonAdd from "../components/Button"

const router = createBrowserRouter(
  [
    {
      element:<Layouts />,
      children:[
        {path:'/',element:<Form />},
        {path:'/to-do',element:<TodoList />},
        {path:'/button',element:<ButtonAdd />},
        {path:'/*', element:<Navigate to='/' />}
      ]
    }
  ]
)
export default router