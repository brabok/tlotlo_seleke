import './sovtech.css'
import SovT from "../../img/sovtech.png"
import SovTechB from "../../img/sovtechbusiness.png"
import SovT1 from "../../img/sov.jpg"
import SovT2 from "../../img/sovv.jpg"
import React from 'react'

const SovTech = () => {
  return (
    <div>
      <h1>SovTech</h1>
        <div className="s_header">
          
      <img src={SovT} alt="" className='m-img_sov' />
      <img src={SovT1} alt="" className='m-img_sov' />
      <img src={SovTechB} alt="" className='m-img_sov' />
      <img src={SovT2} alt="" className='m-img_sov' />
      </div>
      
    </div>
  )
}

export default SovTech
