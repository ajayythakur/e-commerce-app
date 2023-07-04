import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [auth,setAuth]=useAuth();

  const navigate=useNavigate();
  const location=useLocation();

  //FORM SUBMISSON
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
     const res=await axios.post("http://localhost:8080/login",{
      email,
      password
     });
     if(res ){
      console.log("Login Successful");
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token
      });
    localStorage.setItem("auth",JSON.stringify(res.data));
    navigate(location.state || "/")
     }
    } catch (error) {
      console.log("Error in Login",error)
    }
  }

  return (
    <div className='form'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
       <label>E-mail</label><br/>
       <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter your E-mail'/><br/>

       <label>Password</label><br/>
       <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter your password'/><br/>

       <button>Submit</button>
</form>
    </div>
  )
}

export default Login