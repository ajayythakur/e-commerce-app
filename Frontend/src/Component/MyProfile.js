import React from 'react'
import { useAuth } from './context/auth'

const MyProfile = () => {
  // eslint-disable-next-line
    const [auth,setAuth]=useAuth();
  return (
    <div className='profile'>
      <div className='photo'>Photo of User<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8GoKFm9y1vtnd0nxc51xkZXFbfIpnBHQCQ&usqp=CAU' alt='User' /> <br/>Mr. {auth?.user?.name || "Anonymous"} <br/> Your Profile Detials</div>
      <div className='details'>
        <h2>My Profile <br/> </h2>
        <text className='userDetail'>Phone </text>
        <input className='input' disabled value={auth?.user?.phone || "Not Available"} ></input>
        <text className='userDetail'>Email</text>
        <input className='input' disabled value={auth?.user?.email || "Not Available"} ></input>        
        <text className='userDetail'>Address</text> 
        <input className='input' disabled value={auth?.user?.address || "Not Available"} ></input>        </div>
    </div>
  )
}

export default MyProfile