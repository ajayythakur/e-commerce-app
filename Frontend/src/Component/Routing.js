import React from 'react'
import APIfile from './API/APIfile'
import Home from './Home'
import { Routes, Route, NavLink } from 'react-router-dom'
import Macbook from './Macbook'
import Accessories from './Accessories'
import Mobiles from './Mobiles'
// import Image from './Image'
import IPad from './IPad'
import Store from './Store'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Dashbord from '../pages/user/Dashbord'
// import PrivateRoute from './Routes/Private'
import Cart from './Cart'
import MyProfile from './MyProfile'
import PaymentPage from './PaymentPage'
import Order from './Order'
import InfoComp from './InfoComp'
import DetailPage from './DetailPage'


const Routing = () => {
  return (
    <div>
      <APIfile>
        <div className='NavBar'>
          <div><NavLink className={({ isActive }) => (isActive ? 'active-Class' : 'notactive-Class')} to='/'>Home</NavLink></div>
          <div><NavLink className={({ isActive }) => (isActive ? 'active-Class' : 'notactive-Class')} to='/store'>Store</NavLink></div>
          <div><NavLink className={({ isActive }) => (isActive ? 'active-Class' : 'notactive-Class')} to='/mobiles'>iPhone</NavLink></div>
          <div><NavLink className={({ isActive }) => (isActive ? 'active-Class' : 'notactive-Class')} to='/ipad'>iPad</NavLink></div>
          <div><NavLink className={({ isActive }) => (isActive ? 'active-Class' : 'notactive-Class')} to='/macbook'>Macbook</NavLink></div>
          <div><NavLink className={({ isActive }) => (isActive ? 'active-Class' : 'notactive-Class')} to='/accessories'>Accessories</NavLink></div>
        </div>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/macbook' element={<Macbook />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/mobiles' element={<Mobiles />} />
          <Route path='/iPad' element={<IPad />} />
          <Route path='/store' element={<Store />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/product_details' element={<DetailPage />} />
          <Route path='/order' element={<Order/>}>
          <Route path='' element={<Dashbord/>} />
          </Route>


        </Routes>
      </APIfile>
      <InfoComp/>
    </div>
  )
}

export default Routing