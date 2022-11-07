import './skills.css'
import Java from "../../img/languages/java.png"
import Phython from "../../img/languages/python.png"
import Css from "../../img/languages/css.png"
import JS from "../../img/languages/js.png"
import Arduino from "../../img/languages/arduino.png"
import Html from "../../img/languages/html.png"
import PhP from "../../img/languages/php.png"
import Reactt from "../../img/languages/react.png"

import Skill_img from "../../img/skills.jpg"

import React from 'react'

const Skills = () => {
  return (
    <div>

      <div className="skill_header">
      <img src={Skill_img} alt="" className='skill-img' />
      </div>

      <div className='skill_'>
      <div className="skill_body">
        <div className="skill_div">
          <div className="skill-img-wrapper">
            <img src={Java} alt="" className='language-img' />
            </div>
        </div>

        <div className="skill_divs">
          <div className="skill-img-wrapper">
            <img src={Phython} alt="" className='language-img' />
            </div>
        </div>

        </div>

        <div className="skill_body">
          <div className="skill_div">
            <div className="skill-img-wrapper">
              <img src={Reactt} alt="" className='language-img' />
              </div>
          </div>

          <div className="skill_divs">
            <div className="skill-img-wrapper">
              <img src={JS} alt="" className='language-img'/>
              </div>
          </div>

          </div>

          <div className="skill_body">
            <div className="skill_div">
              <div className="skill-img-wrapper">
                <img src={Html} alt="" className='language-img'/>
                </div>
            </div>
            <div className="skill_divs">
              <div className="skill-img-wrapper">
                <img src={Css} alt="" className='language-img'/>
                </div>
            </div>
            </div>

            <div className="skill_body">
              <div className="skill_div">
                <div className="skill-img-wrapper">
                  <img src={Arduino} alt="" className='language-img'/>
                  </div>
              </div>
              <div className="skill_divs">
                <div className="skill-img-wrapper">
                  <img src={PhP} alt="" className='language-img'/>
                  </div>
        </div>

        </div>
        </div>
        </div>
  )
}

export default Skills
