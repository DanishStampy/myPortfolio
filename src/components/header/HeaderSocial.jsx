import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/danish-irfan-96a9921a3/" target='_blank'>
        <BsLinkedin />
      </a>
      <a href="https://github.com/DanishStampy" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/danishstampy/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  )
}

export default HeaderSocial