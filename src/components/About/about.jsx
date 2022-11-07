import './about.css'
import About_me from "../../img/about_me.jpg"
import React from 'react'

const about = () => {
  return (
    <div className="about">
        <div className="about-left">
            <div className="about-img-wrapper">
            <img src={About_me} alt="" className='about-img' />
            </div>
        </div>

        <div className="about-right">
            <div className="about-summary-wrapper">
                <h1>Technology Captured me......</h1>
                <p>
                    I started to be exposed to Information Technology from a year 2014.
                     On that year that’s where I started to learn my first Programing
                     language, which was Scratch. The following year I was introduced 
                     to Delphi programing language till I completed my Grade 12. After 
                     my Matric I dived Deeper in IT and went to Start and Complete my 
                     Advanced Diploma in Information Communication Technology. I regard 
                     ICT to be an all in 1 course because in that 4-year period. I learned 
                     lot of things. The focus was not only on the Development side but I 
                     managed to get knowledge about Project Management, Business Analysis, 
                     Data Analysis, Professional Communication, Networking, and Information 
                     System.  
                </p>
            </div>
        </div>

      
    </div>
  )
}

export default about