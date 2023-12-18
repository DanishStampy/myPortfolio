import React from 'react'
import './about.css'
import myPic from '../../assets/profilepic_about.jpg'
import { FaLaptopCode, FaMobileAlt } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myPic} alt="About Profile Picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className='about__icon' />
              <h5>Web Development</h5>
              <small>1+ Year</small>
            </article>
            <article className="about__card">
              <FaMobileAlt className='about__icon' />
              <h5>Mobile Apps Development</h5>
              <small>1+ Year</small>
            </article>
          </div>

          <p>A 23 year's old programmer. Graduate student from National University of Malaysia(UKM). Live in Banting, Selangor. Love to play video games, badminton and chess. Technology explorer, especially in web development. My main objective is to focus on MERN stack(Javascript stack). Mobile app development also included. I also has several experience in freelancing. </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About