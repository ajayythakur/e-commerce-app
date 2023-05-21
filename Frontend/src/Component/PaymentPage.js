import React from 'react'
import { Link } from 'react-router-dom'

const PaymentPage = () => {
  return (
    <div className='payment'>
      <div>
        <h1>Payment Successful</h1>
        <h2>Your order is placed.</h2>
        <h3>Check <Link className='link' to='/order'>Order</Link> page </h3>
        </div>
    </div>
  )
} 

export default PaymentPage