import React from 'react'
import { store } from '../API/APIfile'
import { useContext } from 'react';
import { useCart } from '../context/Cart';

const All = () => {
  const [context] = useContext(store);
  console.log(context.filter((data) => data.catagory === "Ipad"));
  const[cart,setCart]=useCart();
  return (
    <div>
              {
         context.filter((item)=>item.catagory==="Ipad").map((data)=>{
            return(

                <div className='dataCard'>{data.name}
                <img alt='404' src={data.image} className='dataImg' ></img>
                <img alt='404' src={data.ratting} className='ratingImg'></img>
                <div style={{textDecoration:'line-through',opacity:'0.5'}}> ₹{data.oPrice}</div>
                <span>₹ {data.price}</span>
                <button onClick={()=>{ 
              // setButtonText('ADDED TO CART')
              setCart([...cart,data]); 
              localStorage.setItem('cart',JSON.stringify([...cart,data]));
              // toast.success("Item added to Cart");
              console.log("Item Added to Cart");
            }}>Add to Cart</button><button>Buy Now</button>
                </div>
            )
         })   
        }
    </div>
  )
}

export default All