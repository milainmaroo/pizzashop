import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/pizzaLogo.png'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='pizza logo' />
      </div>
      <div className='info'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
