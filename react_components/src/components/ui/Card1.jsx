import React from 'react'

const Hello = ({name , age , status , children}) => {
  console.log({children});
  const onlinestatus = status ? 'online' : 'offline'
  return (
    <div>
      <h1>Hello,{name}.</h1>
      <p>{age}</p>
      <p>{onlinestatus}</p>
      {children}
    </div>
  )
}
export {Hello}
