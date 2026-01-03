import { useState } from 'react'
import "../App.css"
import React from 'react'
import Button from '@mui/material/Button';
function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}


function Taskitem() {
  const [task,setTask]=useState({message:'',done:false})
  const [items,setItems]=useState([])
  const addtask=(e)=>{
    setTask({message:e.target.value,done:false})
    
  }
const addtasktolist=()=>{
  if(task.message){
    setItems([...items,task])
  setTask({message:'',done:false}) 
 }
}
const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
const markDone=(index)=>{
  setItems((prevItems) => prevItems.filter((items)=> items.index !==index))
  const temp =items.filter((t,i)=>{
    if(i!=index){
      return t
    }
  })
  setItems(temp)
}
  return (
    <div className='Container'>
    <div >
       <input  onKeyDown={handleKeyDown} value={task.message} onChange={addtask} type="text"placeholder='Enter the task' />
    </div>
    <div>
       <Button onClick={addtasktolist} >Add</Button>
     </div>
     <div>
       <div className='task'>
           {
           items.map((t,index)=> (
           <div  className='card'>
            <div className='message'>
                  {t.message}
            </div>
            <div className='button-done'>
              
              <button className='but' onClick={()=>markDone(index)} >{t.done ? 'Not Done':'Mark as Done'}</button>
              
            </div>
           </div>
           ))
           }
      </div>      
    </div>
    </div>
  )
}
export default Taskitem;
export {ButtonUsage};