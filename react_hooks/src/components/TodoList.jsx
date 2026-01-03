import React from 'react'
import { useState } from 'react'

function TodoList() {
  const [task,setTask]=useState({message:'',done:false})
  const [items,setItems]=useState([])
  const addtask=(e)=>{
    setTask({message:e.target.value,done:false})
    
  }
const addtasktolist=()=>{
  setItems([...items,task])
  setTask({message:'',done:false})  
}
const markDone=(index)=>{
  const temp =items.map((t,i)=>{
    if(i==index){
      return {...t,done:!t.done}
      
    }
    else{
      return t;
    }
  })
  setItems(temp)
}
  return (
    <>
    <div>
      <input onChange={addtask} type="text"placeholder='Enter the task' />
      <button onClick={addtasktolist} >Add</button>
      
    </div>
    <div>
      <div>
          <div>Task</div>
          <div>Done</div>
          {
          items.map((t,index)=> (
          <div style={{backgroundColor:t.done ? 'green':'red'}}>
            <div>{t.message}</div>
            <div><button onClick={()=>markDone(index)} >{t.done ? 'Not Done':'Done'}</button></div>
          </div>
          ))
          }
      </div>
     
      
    </div>
    </>
  )
}

export default TodoList
