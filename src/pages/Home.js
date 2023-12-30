import React from 'react'
import '../styles/Home.css'
import BackgroundImg from '../assets/pizza.jpeg'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className='home-container'>
        <h1>Authentic Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <button>ORDER NOW</button>
      </div>
    </div>
  )
}

export default Home
