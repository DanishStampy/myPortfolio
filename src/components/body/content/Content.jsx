import React from 'react'
import Experience from '../../experience/Experience'
import Contact from '../../contact/Contact'
import Portfolio from '../../portfolio/Portfolio'
import About from '../../about/About'
import './content.css'

const Content = () => {
  return (
    <>
      <div className="content__container">
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default Content