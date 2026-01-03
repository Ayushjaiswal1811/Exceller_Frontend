import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Form() {
  let user=[
    {uname : 'admin',pass:'@Admin123'},
    {uname : 'abcd',pass:'abcd123'},
    {uname : 'efgh',pass:'efgh123'},
    {uname : 'ijkl',pass:'ijkl123'},
    {uname : 'mnop',pass:'mnop123'}
  ]
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [bgcolor,setBgcolor]= useState("blueviolet")
  const [mssg,setMssg]=useState("")
  const [isLogin,setislogin]=useState(null)
  const validation=()=>{
  setislogin( user.some((user)=>
      user.uname == username && user.pass == password
    ))
      if(isLogin){
        setBgcolor('green')
      }
      else{
        setBgcolor('red')
      }
     
    }
      useEffect(()=>{
        if(isLogin == null){
          setBgcolor('blueviolet')
        }else if(isLogin == true)
        {
          setMssg('Logged in Successfully.')
        }else{
          setMssg('Login Failed, Try Again.')
        }
      },[isLogin])
 
  const onuserchange=(e)=>{
      setUsername(e.target.value);
    }
  const onpasschange=(e)=>{
      setPassword(e.target.value);
    } 
  return (
    <>
    <div style={{backgroundColor:bgcolor}}className='login-form'>
      <legend></legend>
      <h1>Login User Form!</h1>
      <label htmlFor="username">Username</label>
      <input onChange={onuserchange} type="text"placeholder='Enter Your Username' />
      <label htmlFor="password">Password</label>
      <input onChange={onpasschange} type="password" placeholder='Enter Your password'/>
      <p>{mssg}</p>
      <button onClick={validation}>Login</button>
    </div>
    </>
  )
}

export default Form

