import React from 'react'
import './footer.css'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MyPortfolio</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/danish-irfan-96a9921a3/"><AiOutlineLinkedin /></a>
        <a href="https://github.com/DanishStampy"><AiOutlineGithub /></a>
        <a href="https://www.instagram.com/danishstampy/"><AiOutlineInstagram /></a>
        <a href="https://twitter.com/danishstampy"><AiOutlineTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MyPortfolio. 2023.</small>
      </div>
    </footer>
  )
}

export default Footer