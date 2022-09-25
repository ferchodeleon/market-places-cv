import React from 'react';
import Nike from '../../assets/images/Nike.jpg';

export const Header = () => {
  return (
    <header>
      {/* <div className='menu'>
        <box-icon name='menu'></box-icon>
      </div> */}
      <a href='#'>
        <div className='logo'>
          <img src={Nike} alt='logo' />
        </div>
      </a>
      <ul>
        <li>
          <a href='#'>Inicio</a>
        </li>
        <li>
          <a href='#'>Ruta</a>
        </li>
      </ul>
      <div className='cart'>
        <box-icon name='cart'></box-icon>
        <span className='total_item'>0</span>
      </div>
    </header>
  )
}
