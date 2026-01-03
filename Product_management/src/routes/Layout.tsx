import { Link, Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
      <h1> MY Product Management App</h1>
      <ul>
        <li>
          <Link to={'/home'}>Home</Link>
          <Link to={'/add'}>Add Product</Link>
          <Link to={'/edit/:id'}>Edit Product</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Layout
