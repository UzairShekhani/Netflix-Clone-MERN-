import React from 'react'
import './Footer.css'
import youtubeIcon from "../../asset/youtube_icon.png"
import twitterIcon from "../../asset/twitter_icon.png"
import instagramIcon from "../../asset/instagram_icon.png"
import facebookIcon from "../../asset/facebook_icon.png"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={youtubeIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={facebookIcon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie preferences</li>
        <li>Corporate Imformation</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&#169; 2024 Netflix, Pakistan.</p>
    </div>
  )
}

export default Footer