import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';

// const menu = document.querySelector('.menu');
// const menuToggle = document.querySelector('#mobile-menu');

// menuToggle.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });
const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header>
     

     <nav class="navbar">
     <div class="logo">
                <h1>Logo</h1>
      </div>
  
   
      <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
      <li> <NavLink to="/">Home</NavLink></li>
      <li> <NavLink to="/accessibility">Accessibility</NavLink></li>
      <li><NavLink to="/planyourjourney">Plan Your Journey</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/triptracker">Trip Tracker</NavLink></li>
      <li><NavLink to="/help">Help</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
     </ul>
     <div className="menu-toggle" id="mobile-menu" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
</nav>

    </header>
  )
}



export default Header
