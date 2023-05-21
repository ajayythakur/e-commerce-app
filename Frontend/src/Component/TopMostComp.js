import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './context/auth'
import { useCart } from './context/Cart'
import { Badge } from 'antd'
import profileicon from '../Images/profileicon.svg'
import carticon from '../Images/carticon.svg'

const TopMostComp = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem("auth");
    console.log("User logout succesfully");
  }
  return (
    <div className='topFlex'>
      <div>
        <div>EN<select><option></option></select>
          &nbsp;
          $<select><option></option></select></div>
      </div>
      <div>
        <div><Link className='link' to='/profile'><img src={profileicon} alt='404' /> My Profile</Link> &nbsp;&nbsp;
          <Badge count={cart?.length} showZero> &nbsp;
            My Cart <Link className='link' to="/cart"><img src={carticon} alt='404' /></Link> &nbsp;&nbsp;
          </Badge>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className='link' to="/order" >My Orders</Link>
        </div>
      </div>
      {
        !auth?.user ? (
          <>
            <div><Link className='link' to="/register">Register</Link></div>
            <div><Link className='link' to="/login">LogIn</Link></div>
          </>
        ) : (<>
          <div className='logout' onClick={handleLogout}>Logout</div>
        </>)
      }



    </div>
  )
}

export default TopMostComp 