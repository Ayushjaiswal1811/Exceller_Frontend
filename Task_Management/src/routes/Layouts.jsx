import React from 'react'
import { Outlet } from 'react-router-dom'
function Layouts() {
  return (
    <div>
            <h1>Task Management App !</h1>
            <Outlet />
    </div>
  )
}

export default Layouts
