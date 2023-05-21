import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[phone,setPhone]=useState("");
  const[address,setAddress]=useState("");
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:8080/register",{
      name,
      email,
      password,
      phone,
      address
      });
      if(res){
        console.log("Data Saved",res)
      }
      else{
        console.log("Data is not saved");
      }
    } catch (error) {
      console.log("Error Occured while registering user",error);
    }
    navigate("/login");
  }  
  return (
    <div className='form'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
       <label>Name</label><br/>
       <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter your Name'/><br/>

       <label>Email</label><br/>
       <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter your E-mail'/><br/>

       <label>Password</label><br/>
       <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter your Password'/><br/>

       <label>Phone</label><br/>
       <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder='Enter your Phone'/><br/>

       <label>Address</label><br/>
       <input type="text"onChange={(e)=>setAddress(e.target.value)} value={address} placeholder='Enter your Address'/><br/>

       <button>Submit</button>
      </form>
    
    </div>
  )
}

export default Register