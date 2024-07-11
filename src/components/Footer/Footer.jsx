import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
    <div className='footer-container'>      
        <div className='subscribe-box'>
          <div className="subscribe-header">
          <h1>Want Us To Email You About Special Offers And Updates?</h1>
          </div>
          <div className="subscribe-btn">
            <span> <FontAwesomeIcon icon={faPaperPlane} className='subscribe-icon' /></span>
            <input type="email" placeholder='Enter Your Email'/>
            <button>Subscribe Now</button>
          </div>
        </div>      
      <div className="footer-top">
        <div className="footer-content">
          <h2>Site Map</h2>
          <p>Documentation</p>
          <p>Feedback</p>
          <p>Plugins</p>
          <p>Support Forums</p>
          <p>Themes</p>
        </div>
        <div className="footer-content">
          <h2>Useful Links</h2>
          <p>About Us</p>
          <p>Help Link</p>
          <p>Term & Conditions</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-content">
          <h2>Social Contact</h2>
          <p>Google</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
          <p>LinkedIn</p>
        </div>
        <div className="footer-content">
          <h2>Our Support</h2>
          <p>Help Center</p>
          <p>Paid With Mollie</p>
          <p>Status</p>
          <p>Changelog</p>
          <p>Contact Support</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span className='footer-bottom-span1'> © 2022 </span> 
      <span className='footer-bottom-span2'> Edukon </span>
      <span className='footer-bottom-span1'> Designed by </span> 
      <span className='footer-bottom-span2'> CodexCoder </span>
      </div>
    </>
  )
}

export default Footer;