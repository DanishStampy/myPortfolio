import React from 'react'
import myResume from '../../assets/Danish Irfan - Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={myResume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA