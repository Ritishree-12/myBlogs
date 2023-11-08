import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg">Blogs</span>
      </div>
      <img className='headerImg' src='./assets/flowersbgg.jpeg' alt='images' />
    </div>
  )
}

export default Header
