import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
const  Navbar=()=> {
    
    const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav>
      <Link to="/" className="title">
      <img src='https://growth.cx/wp-content/uploads/2023/02/Growthcx.png' className='logo-img'></img>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Whyus ?</NavLink>
        </li>
        <li>
          <NavLink to="/our">Our Fixes</NavLink>
        </li>
        <li>
          <NavLink to="/growth">Growth</NavLink>
        </li>
        <li>
          <NavLink to="/eye">Open eyes</NavLink>
        </li>
        <li>
          <NavLink to="/customer">Customer</NavLink>
        </li>
        <li className='hope'> Hope on a call</li>
      </ul>
    
    </nav>
  )}
export default Navbar;