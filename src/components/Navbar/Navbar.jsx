import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../asset/logo.png'
import searchIcon from '../../asset/search_icon.svg'
import bellIcon from '../../asset/bell_icon.svg'
import caret from '../../asset/caret_icon.svg'
import profileIcon from '../../asset/profile_img.png'
import { logout } from '../../firebase'






const Navbar = () => {


  const navref = useRef()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add("nav-dark")
      }else{
        navref.current.classList.remove("nav-dark")
      }
    })
  } , [])

  return (
    <div ref={navref} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li> Movies</li>
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
          <p onClick={() => {logout()}}>Sign Out Of Netflix  </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar