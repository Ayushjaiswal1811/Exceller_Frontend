import React from 'react'
import { useState } from 'react';

function ButtonAdd() {
  const [count,setCount]= useState(0)
  const [text,setText]= useState(true)
  const [color,setColor]= useState("white")
  const [bgcolor,setBgcolor]= useState("blueviolet")
  let num =5;
   const increase = (num)=>{
    setCount(count +num)
    setColor('green')
    console.log(count)
   }
   const decrease = (num)=>{
    setCount(count -num)
    setColor('red')
     console.log(count)
   }
   const reset =() =>{
    setCount(0)
    console.log(count)
   }
   const setcolor=()=>{
    setColor("green")
   }
   const oninputchange=(e)=>{
    setBgcolor(e.target.value)
   }
   
  return (
    <>
    { text &&
    <div style={{backgroundColor:bgcolor,padding:'20px'}}>
      <button onClick={()=>increase(num)}> + </button>
      <h1 style={{color:color}}>
      {count}
      </h1>
      <button disabled={count==0} onClick={()=>decrease(num)}> - </button>
      <button onClick={reset}> Reset to 0 </button>
    </div>
    }
    <div>
      <button onClick={()=>setText(!text)}>{text ? 'hide' : 'Show'}</button>
    </div>
    <div style={{backgroundColor:'beige', padding:'20px'}}>
      <input onChange={oninputchange} type="text" placeholder='Enter Valid Colorname' />
      <button onClick={setColor}>green</button>
    </div>
    </>
  )
}

export default ButtonAdd
