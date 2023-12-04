import React from 'react'
import hero from '../images/Group77.jpg'

function Hero() {
  return (
    <>
     <div>
      <img src= {hero} alt='nothing' className='hero' />
    </div>
    <br />
    <div>
<h1 className='hero-heading'>Online Experiences</h1>
<p className="hero-para">
Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </div> 
    </>
  )
}

export default Hero
