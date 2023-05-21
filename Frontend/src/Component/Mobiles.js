import React from 'react'
import { store } from './API/APIfile';
import { useContext,useState } from 'react';
import { useCart } from './context/Cart';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useRecent } from './context/Recent';


const Mobiles = () => {
    const [context]=useContext(store)
    console.log(context);

    const [cart,setCart]=useCart();
    // eslint-disable-next-line
    const [data,setData]=useState([]);

    const[recent,setRecent]=useRecent();
    // console.log(recent)


  return (

     <div className='item'>
        {
         context.filter((item)=>item.catagory==="Mobile").map((data)=>{
            return(
                <div className='dataCard'>{data.name}
                <img alt='404' src={data.image} className='dataImg' ></img>
                <img alt='404' src={data.ratting} className='ratingImg'></img>
                <div style={{textDecoration:'line-through',opacity:'0.5'}}> ₹{data.oPrice}</div>
                <span>₹ {data.price}</span>
                <button onClick={()=>{ 
              setCart([...cart,data]); 
              localStorage.setItem('cart',JSON.stringify([...cart,data]));
              toast.success("Item added to Cart");
              console.log("Item Added to Cart");
            }}>Add to Cart</button><button>Buy Now</button>

            <Link to='/product_details' state={data}>
            <button onClick={()=>{
            setData(data);
            setRecent([...recent,data]);
            localStorage.setItem('recent',JSON.stringify([...recent,data]));

            }}>View in Brief</button>
            </Link>
                </div> 
            ) 
         })  
        }

    </div>

  )
}

export default Mobiles