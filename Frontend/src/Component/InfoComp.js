import React from 'react'
import refund from '../Images/refund.svg'
import shipping from '../Images/shipping.svg'
import support from '../Images/support.svg'


const InfoComp = () => {
  return (
    <div className='info'>
        <div className='subInfo'><img src={refund}alt='404' /><h3>Free shipping across country</h3><br/> </div>
        <div className='subInfo two'><img src={shipping} alt='404' /><h3>30 Days Return Policy<br/>100% Refund</h3></div>
        <div className='subInfo'><img src={support} alt='404' /><h3>Support 24/7 <br/>1800 1234 4321</h3></div>
    </div>
  )
}

export default InfoComp 