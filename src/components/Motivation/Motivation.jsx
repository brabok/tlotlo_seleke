import './motivation.css'
import Motivations from "../../img/motivation.jpg"
import Why_me from "../../img/why_me.jpg"
import React from 'react'

const Motivation = () => {
  return (
    <div className='m-body'>
      <div className="m_header">
      <img src={Why_me} alt="" className='m-img_why_me' />
      </div>
      <div className='m'>
        <div className='m-left'>
        <div className='m-left-wrapper'>
          <h1>Why do I want to be a SovTech Developer.</h1>
                <p>
                I have always wanted to see myself growing in the Software Development field.  I am very passionate about Coding; 
                I like learning new Technologies. At the moment I am exposed to more than 7 programing languages. I always try to
                 keep up with the latest technology, since well technology changes every day. This is always challenging and the good 
                 part of it is that i like adapting to new changes exploring new things, now this motivates me not to relax and be 
                 on a comfort zone. For me to get an opportunity of being part of the SovTech developer group will grow me because 
                 I will be exposed to new technologies new people. I am one person who belives in team work. I belive that i will bring 
                 another value to  the SovTech culture as I will be expanding my set of skills.
                </p>
          </div>
        
        </div>
        <div className='m-right'>
        <img src={Motivations} alt="" className='m-img' />
          
          
        
      </div>
      </div>
      
    </div>
  )
}

export default Motivation
