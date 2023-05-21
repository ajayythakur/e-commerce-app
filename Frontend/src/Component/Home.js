import React, { useState } from 'react'
// import { Routes,Route,NavLink } from 'react-router-dom'
// import Accessories2 from './SmallNav/Accessories2'
// import Mac from './SmallNav/Mac'
// import Ipod from './SmallNav/Ipod'
// import Ipad from './SmallNav/Ipad'
// import Iphone from './SmallNav/Iphone'
// import All from './SmallNav/All'
import Image  from './Image'
import { useLocation } from 'react-router-dom'
import { useRecent } from './context/Recent';
// import { useCart } from './context/Cart';
import { Link } from 'react-router-dom';
// import InfoComp from './InfoComp'

const Home = () => {
  // eslint-disable-next-line
  const location=useLocation();
  // const [cart,setCart]=useCart();
  // eslint-disable-next-line
  const [recent,setRecent]=useRecent();
  // eslint-disable-next-line
  const[data,setData]=useState();
  return (
    <div className='home'>
      <Image />

<h3>Recently Viewed</h3>

<div className='recent_product'>
{
  recent.map((data)=>{
    return(
      <div className='recentCard'>{data.name}
      <img alt='404' src={data.image} className='dataImg' ></img>
      <img alt='404' src={data.ratting} className='ratingImg'></img>
      <div style={{textDecoration:'line-through',opacity:'0.5'}}> ₹{data.oPrice}</div>
      <span>₹ {data.price}</span>
      {/* <button onClick={()=>{ 
    // setButtonText('ADDED TO CART')
    setCart([...cart,data]); 
    localStorage.setItem('cart',JSON.stringify([...cart,data]));
    // toast.success("Item added to Cart");
    console.log("Item Added to Cart");
  }}>Add to Cart</button><button>Buy Now</button> */}

  <Link to='/product_details' state={data}>
  <button onClick={()=>{
  setData(data);
  // setRecent([...recent,data]);
  // localStorage.setItem('recent',JSON.stringify([...recent,data]));

  }}>View in Brief</button>
  </Link> 
  </div>
    )
  })
}
</div>
    </div>
  )
}

export default Home

// eslint-disable-next-line
{/* <h1>Best Seller</h1>
      <div className='smallNav'>
        <div><NavLink className={({isActive})=>(isActive ? 'active2' : 'not-active2')} to='/all'>All</NavLink></div>
        <div><NavLink className={({isActive})=>(isActive ? 'active2' : 'not-active2')} to='/mac'>Mac</NavLink></div>
        <div><NavLink className={({isActive})=>(isActive ? 'active2' : 'not-active2')} to='/iphone'>iPhone</NavLink></div>
        <div><NavLink className={({isActive})=>(isActive ? 'active2' : 'not-active2')} to='/ipad'>iPad</NavLink></div>
        <div><NavLink className={({isActive})=>(isActive ? 'active2' : 'not-active2')} to='/ipod'>iPod</NavLink></div>
        <div><NavLink className={({isActive})=>(isActive ? 'active2' : 'not-active2')} to='/accessories2'>Accessories</NavLink></div>
      </div> */}
      // eslint-disable-next-line
{/* <Routes>
  <Route path='/all' element={<All/>} />
  <Route path='/mac' element={<Mac/>} />
  <Route path='/iphone' element={<Iphone/>}/>
  <Route path='/ipad' element={<Ipad/>} />
  <Route path='/ipod' element={<Ipod/>}/>
  <Route path='/accessories2' element={<Accessories2/>}/>

</Routes> */}
// eslint-disable-next-line
{/* <InfoComp/> */}