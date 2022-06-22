import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1 className='hero-h1'>Efficiency is the <span className='hero-h1 green'>Key</span></h1>
        <h2 className='hero-h2'>We keep improving</h2>
        <button type='' className='btn'>Contact Us</button>
      </div>
      <div className='hero-img-div'>
        <img className='hero-img' src="https://ied.eu/wp-content/uploads/2018/09/Energy-Effiency.png" alt="green-energy-image" />
      </div>
    </div>
  )
}

export default Hero