import React from 'react';
import '../components/Footer.css'

const Footer = () => {
  return (<div class="footer">
    
      <ul class="social_icons">
          <li><a class="fa fa-facebook"></a></li>
          <li><a class="fa fa-whatsapp"></a></li>
          <li><a class="fa fa-twitter"></a></li>
          
      </ul>
      <ul class="menu">
          <li><a href="#Hero">Home</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li><a href="#Team">Team</a></li>
          <li><a href="#Board">AdBoard</a></li>
      </ul>
      <div class="text">
          <p>© 2022 Monumental Concepts & Displays || All Rights Reserved</p>
      </div>

      </div>)
};

export default Footer;
