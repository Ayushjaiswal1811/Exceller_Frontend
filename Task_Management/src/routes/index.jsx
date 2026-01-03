
import {createBrowserRouter, Navigate, Outlet} from "react-router-dom"
import Taskitem, { ButtonUsage } from "../Components/Taskitem"
import Layouts from "./Layouts"
import Form from "../../../react_hooks/src/components/Form"
const router = createBrowserRouter(
  [
    {
      element:<Layouts />,
      children:[
        {path:'/',element:<Taskitem />},
        {path:'/1',element:<ButtonUsage />},
        {path:'/abhijecta', element:<Form />}
      ]
    }
  ]
)
export default router