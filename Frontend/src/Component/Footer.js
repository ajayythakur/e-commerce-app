import React from 'react'
import ishop from '../Images/ishop.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer1'>
        <div className='card'><img src={ishop} alt='404' />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</div>        
        <div className='card'><span className='footerText'>Follow Us</span><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
        </div>
        <div className='card'>
        <span className='footerText'>Contact Us</span><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
        </div>
        </div> 
{/* <hr></hr> */}
        <div className='footer2'>
        <div className='card2'><span className='foooter2Text'>Information</span><br/><br/>
            About Us <br/>
            Information <br/>
            Privacy Policy  <br/>
            Terms & Condition<br/>
            </div>

            <div className='card2'><span className='foooter2Text'>Service</span><br/><br/>
            About Us <br/>
            Information <br/>
            Privacy Policy  <br/>
            Terms & Condition<br/>
            </div>

            <div className='card2'><span className='foooter2Text'>Extras</span><br/><br/>
            About Us <br/>
            Information <br/>
            Privacy Policy  <br/>
            Terms & Condition<br/>
            </div>

            <div className='card2'><span className='foooter2Text'>My Account</span><br/><br/>
            About Us <br/>
            Information <br/>
            Privacy Policy  <br/>
            Terms & Condition<br/>
            </div>

            <div className='card2'><span className='foooter2Text'>Useful Links</span><br/><br/>
            About Us <br/>
            Information <br/>
            Privacy Policy  <br/>
            Terms & Condition<br/>
            </div>

            <div className='card2'><span className='foooter2Text'>Our Offers</span><br/><br/>
            About Us <br/>
            Information <br/>
            Privacy Policy  <br/>
            Terms & Condition<br/>
            </div>
        </div>

    </div>
  )
}

export default Footer