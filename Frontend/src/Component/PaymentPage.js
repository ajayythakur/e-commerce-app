import React, { useEffect, useState } from 'react'
import { useAuth } from './context/auth';
import DropIn from "braintree-web-drop-in-react"
import { useOrder } from './context/order';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TotalPrice} from '../Component/Cart'
import { useCart } from './context/Cart';


const PaymentPage = () => {
  // eslint-disable-next-line
  const [auth,setAuth]=useAuth();
  const [order,setOrder]=useOrder();
  const [clientToken, setClientToken]=useState('')
  const [instance,setInstance]=useState('')
  const [loading,setLoading]=useState(false);
  const [cart,setCart]=useCart()
  console.log("cart items=",cart)
  const navigate=useNavigate();
  const amount=TotalPrice();

  const getToken = async()=>{
    try {
      const {data}=await axios.get('http://localhost:8080/braintree/token')
      // alert("Redirecting to payment page");
      console.log(data)
      setClientToken(data?.clientToken)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getToken();
  },[auth?.token]);

  // handle payments
  const handlePayment=async()=>{
    try {
      console.log('payment started')
      setLoading(true)
      const{nonce}=await instance.requestPaymentMethod();
      console.log('nonce=>',nonce)

      setOrder([...order, ...cart]);
      localStorage.setItem('order', JSON.stringify([...order, ...cart]))
      // toast.success("Item added to Cart")
      console.log("Item Added to Cart")

      navigate('/');
      alert("Payment Complete")

      const {datas} = await axios.post('http://localhost:8080/braintree/payment',{
        nonce,order
      }) 
      console.log(datas)
      if(datas){
      setLoading(false)
      localStorage.removeItem('order')
      setOrder([]);
      }
    } catch (error) { 
      console.log(error)
      setLoading(false);
    }
  }
  return (
    <div className='payment-gateway'>
         {
          !clientToken ? (''):(
            <>
            <DropIn
            options={{ authorization:clientToken ,
              paypal:{
                flow:'vault'
              }
            }}
            onInstance={instance=> setInstance(instance)}
            />
            <div>You are Paying <input placeholder='Amount' value={amount} disabled/></div>
            <div>Item Quantity <input placeholder='quantity' value={cart.length} disabled/></div>
          <button onClick={handlePayment}>
          {loading ? 'Processing' : 'Make Payment'}
        </button>
            </>
          )
         }

        </div>
  )
}

export default PaymentPage