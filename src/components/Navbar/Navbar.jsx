import React from 'react'
import './Navbar.css'
import logo from '../../asset/logo.png'
import searchIcon from '../../asset/search_icon.svg'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="Navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="Navbar-right">
        <img src={searchIcon} alt="" className='icons' />
        <p>Childern</p>
        
        <img src={searchIcon} alt="" className='icons' />
      </div>
    </div>
  )
}

export default Navbar