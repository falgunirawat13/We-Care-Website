import React from 'react'
import carousel5  from '../assets/images/carousel3.jpg';
import "../styles/WeStarted.css";

const PartnerWithUs = () => {
  return (
    <div class="image-container">
      <img src={carousel5} alt="" style={{objectFit:'cover', width:"100%", height:"400px", borderRadius:'0'}}/>
      <div class="image-text">
       PARTNER WITH US
    </div>
  </div>
  )
}

export default PartnerWithUs