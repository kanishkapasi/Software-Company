import React from 'react'

// Icons
import { FaHome } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaGooglePlusG } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

// Import Css File
import './Contact.css'

function Contact() {
  
  return (
    <div className="cContainer">
      <div className='contactContainer'>
        {/* Form Section */}
        <h1>Contact Us</h1>
        <div className="form">
          <div className="firstRow">
          <input type="text" name="name" id="one" placeholder='Name' required/>
          <input type="email" name="email" id="one" placeholder='Email'required/>
          </div>
          <div className="secondRow">
            <input type="text" name="phone" id="two" placeholder='Phone'required/>
            <input type="text" name="address" id="two" placeholder='Address'required/>
          </div>
          <div className="thirdRow">
            <textarea name="message" id="three" cols="3" rows="10" placeholder='Your Message'></textarea>
          </div>
          <button>Send Message</button>
        </div>
      </div>  
        {/* Contact Us Section */}
      <div className="detailsSection">
        <div className="details">
          <div className="mainDetail">
            <h2>Soft<span>ware</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/> Cum expedita aliquid consequatur possimus consectetur id?</p>
            <div className="addressPanel">
              <div className="address">
                <FaHome className='homeIcons' />
                <p>Corporate Office</p>
                <p>3029A,Melbourne,Australia</p>
              </div>
              <div className="reach">
                <BsTelephoneFill/>
                <p>Reach Us</p>
                <p>+4 123 123 45555 88888</p>
              </div>
            </div>
          </div>
          <div className="visaTypes">
              <h2>Visa Types</h2>
              <p>Students Visa</p>
              <p>Business Visa</p>
              <p>Family Visa</p>
              <p>Travel Visa</p>
              <p>Loan Visa</p>
          </div>
          <div className="sign">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Consectetur, veritatis?</p>
              <div className="search">
                <input type="text" name="email" id="" placeholder='Email'/>
                <button>SUBSCRIBE</button>
              </div>
              <div className="social">
                <p>Follow Us :</p>
                <FaTwitter className='IconsS'/>
                <FaYoutube className='IconsS'/>
                <FaFacebookF className='IconsS'/>
                <FaGooglePlusG className='IconsS'/>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Contact
