import React from 'react'
import { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Spinner = ({path= "login"}) => {
    const [count,setCount]=useState(3);
    const navigate=useNavigate();
    const location=useLocation();

    useEffect(()=>{
        const interval= setInterval(()=>{
            setCount((prevValue)=>--prevValue);
        },1000);
        count === 0 && navigate(`/${path}`,{
            state:location.pathname
        });  
    return ()=>clearInterval(interval);
    },[count,navigate,location,path])
  return (
    <div>
        <h1>Redirecting in {count} second</h1>
    </div>
  )
}

export default Spinner