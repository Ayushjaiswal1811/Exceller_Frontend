import React from 'react'

function Card2({data}) {
  return (
    <div>
      <h1>
        Hello 
        {data.map((data)=>(
          <p>{data.name}{data.age}</p>
        ))}
      </h1>
    </div>
  )
}

export default Card2
