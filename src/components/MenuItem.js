import React from 'react'

function MenuItem({ image, name, price }) {
  return (
    <div className='menu-item'>
      <div
        className='menu-img'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  )
}

export default MenuItem
