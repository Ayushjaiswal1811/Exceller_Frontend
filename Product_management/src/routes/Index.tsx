import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Products/Home";
import AddProduct from "../Pages/Products/AddProduct";
import EditProduct from "../Pages/Products/EditProduct";
import NotFound from "../Pages/NotFound";


const router = createBrowserRouter(
  [
    {
      element:<Layout />,
      children:[
        {path:'/home',element:<Home />},
        {path:'/add',element:<AddProduct />},
        {path:'/edit/:id',element:<EditProduct />},
        {path:'/*',element:<Navigate to={'/'} />}
      ]
    }
  ]
)

export default router