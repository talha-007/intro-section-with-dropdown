import React from 'react'
import databiz from './/images/client-databiz.svg'
import audiophile from './/images/client-audiophile.svg'
import meet from './/images/client-meet.svg'
import maker from './/images/client-maker.svg'
import heroimage from './images/image-hero-desktop.png'
import mobileimage from './images/image-hero-mobile.png'
import './Hero.css'


function Hero() {
  return (
    <section className='hero' id='hero'>
        <div className='main'>
            <div className='mobile_image'>
                <img src={mobileimage} alt="" />
            </div>
            <div className='left'>
                <h1>  Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.</p>
                <a className='btn_learn' href="/"> Learn more</a>
                <div className='sponsers'>
                    <ul>
                        <li><a href="/"><img src={databiz} alt="" /></a></li>
                        <li><a href="/"><img src={audiophile} alt="" /></a></li>
                        <li><a href="/"><img src={meet} alt="" /></a></li>
                        <li><a href="/"><img src={maker} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className='right'>
                <img className='hero_img' src={heroimage} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero