import React from 'react'
import carousel5  from '../assets/images/carousel3.jpg';
import "../styles/WeStarted.css";

const WhereWeWork = () => {
  return (
<div class="image-container">
      <img src={carousel5} alt="" style={{objectFit:'cover', width:"100%", height:"400px", borderRadius:'0'}}/>
      <div class="image-text">
       WHERE WE WORK
    </div>
  </div>
  )
}

export default WhereWeWork