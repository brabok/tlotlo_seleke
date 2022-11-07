import './intro.css'
import Me from "../../img/tlotlo.jpg"

import React from 'react'

const Intro = () => {
  return (
    <div className='i'>
      <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className='i-introduction'>Hello my name is</h2>
            <h1 className='i-name'>Tlotlo Seleke</h1>
            
            <div className="i-skills">
              <div className="i-skills-wrapper">
                <div className="i-skill-item">Java</div>
                <div className="i-skill-item">VB.Net</div>
                <div className="i-skill-item">Delphi</div>
                <div className="i-skill-item">React.js</div>
                <div className="i-skill-item">Android Studio</div>
              </div>
            </div>
            <br />

            <div className="i-discription">
              I am a Sol Plaatje University graduate. Obtaining Advanced Diploma in Information Communication Technology. I majored 
              in Application Development.
              
            </div>
          </div>
      </div>

      <div className="i-right">
        <div className="i-img-bg"></div>
        <img src={Me} alt="" className='i-img' width='50' height='50' />

      </div>
      
    </div>
  )
}

export default Intro
