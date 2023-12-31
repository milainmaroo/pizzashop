import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menu-title'>Our Menu</h1>
      <div className='menu-list'>
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.pizzaImage}
              name={menuItem.pizzaName}
              price={menuItem.pizzaPrice}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu
