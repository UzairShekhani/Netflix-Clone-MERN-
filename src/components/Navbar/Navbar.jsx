import React from 'react'
import './Navbar.css'
import logo from '../../asset/logo.png'
import searchIcon from '../../asset/search_icon.svg'
import bellIcon from '../../asset/bell_icon.svg'
import caret from '../../asset/caret_icon.svg'
import profileIcon from '../../asset/profile_img.png'






const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
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
      <div className="navbar-right">
        <img src={searchIcon} alt="" className='icons' />
        <p>Childern</p>
        <img src={bellIcon} alt="" className='icons' />
        <div className="navbar-profile">
        <img src={profileIcon} alt="" className='profile' />
        <img src={caret} alt=""/>
        <div className="dropdown">
          <p>Sign Out Of Netflix  </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar