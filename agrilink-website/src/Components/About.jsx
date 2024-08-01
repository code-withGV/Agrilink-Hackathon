import React from 'react';
import aboutimage from '../images/about.jpg'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>About Us</h1>
            <p>At AgriLink, We aim to eliminate intermediaries, ensuring farmers receive fair prices for their produce, and enhance their productivity through timely updates on government schemes and potential crop damage alerts.</p>
            <button>Read More</button>
        </div>

    </div>
  )
}

export default About;