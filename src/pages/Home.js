import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import BackgroundImg from '../assets/pizza.jpeg'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className='home-container'>
        <h1>Authentic Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/menu'>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
