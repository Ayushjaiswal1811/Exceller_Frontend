
import React from 'react';

const Header = () => {
  const nav=["Home","About","Contact"]
  return (
    <div className="header">
      <h1>Header</h1>
      <div className="navbar">
        {nav.map((user,index) =>(
          <div key={index} className="navbar">
       <p>{user} </p>
       </div>
      ))}
      </div>
    </div>
  )
}
export {Header}