import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
          <nav className="navbar navbar-light bg-light d-flex justify-content-between m-auto"> <a class="navbar-brand">Knowledge Cafe</a> 
          <div className="menu d-flex g-4"> 
          <a href="/home">Home</a> 
          <a href="/about">About Us</a> 
          <a href="/contact">Contact Us</a> 
          </div> 
          </nav>
      
    </div>
    );
};

export default Header;