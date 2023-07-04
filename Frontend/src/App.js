import React from 'react'
// import APIfile from './Component/API/APIfile'
// import Image from './Component/Image'
import './App.css'
import TopMostComp from './Component/TopMostComp'
import Routing from './Component/Routing'
// import Home from './Component/Home'
// import { useAuth } from './Component/context/auth'
import Footer from './Component/Footer'

const App = () => {
  // const [auth,setAuth]=useAuth();
  return (
    <div>
<TopMostComp/>
<Routing/>
<Footer/>

{/*   
  <Home/>
  <Macbook/>
  <Accessories/>
  <Mobiles/> */}



    </div>
  )
}

export default App