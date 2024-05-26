import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroBanner from '../../asset/hero_banner.jpg'
import heroTittle from '../../asset/hero_title.png'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      < div className="hero">
        <img src={heroBanner} alt="" className='banner-img' />
         <div className="hero-caption">
          <img src={heroTittle} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home