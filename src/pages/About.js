import React from 'react'
import PizzasImg from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div
        className='about-img'
        style={{ backgroundImage: `url(${PizzasImg})` }}
      ></div>
      <div className='about-text'>
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime
          officia rerum exercitationem expedita saepe dolores nihil eaque quis
          obcaecati animi vel dignissimos itaque maiores odit eius, quasi minima
          aliquam illum blanditiis. Blanditiis eos nulla laudantium eius!
          Facilis nisi, sed illum nesciunt et quas eum numquam voluptates magnam
          molestias exercitationem tempora dolorem velit similique libero
          explicabo mollitia ad ab quae repellat. Optio labore amet illo
          pariatur odit porro, dignissimos quod repellendus vero quis eos non
          voluptates repudiandae impedit, corrupti eius velit sed in ea atque
          veniam. Explicabo fugiat fugit ipsa nemo hic! Esse, exercitationem?
          Magnam deserunt nulla minus aliquam quisquam.
        </p>
      </div>
    </div>
  )
}

export default About
