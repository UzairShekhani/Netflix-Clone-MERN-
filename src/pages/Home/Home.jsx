import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroBanner from '../../asset/hero_banner.jpg'
import heroTittle from '../../asset/hero_title.png'
import playIcon from '../../asset/play_icon.png'
import infoIcon from '../../asset/info_icon.png'
import TittleCards from '../../components/TittleCards/TittleCards'







const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      < div className="hero">
        <img src={heroBanner} alt="" className='banner-img' />
         <div className="hero-caption">
          <img src={heroTittle} alt="" className='caption-img' />
          <div className="hero-btns">
            <button className='btn'><img src={playIcon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={infoIcon} alt="" />More Info</button>
          </div>
          <TittleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TittleCards/>
      <TittleCards/>
      <TittleCards/>
      <TittleCards/>
      </div>
    </div>
  )
}

export default Home