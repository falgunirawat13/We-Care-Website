import React from 'react'
import wherebg from "../assets/images/where_bg.jpg";
import "../styles/WeStarted.css";

const WhereWeWork = () => {
  return (
    <>
    <div class="image-container">
      <img src={wherebg} alt="" style={{objectFit:'cover', width:"100%", height:"420px", borderRadius:'0',filter:"blur(3px)"}}/>
      <div class="image-text">
       WHERE WE WORK
    </div>
  </div>
  <div>
    <h4 className='head1'><br/> Where We Work</h4>
    <p className='para1'>
<br></br>

<br/><br/>
    </p>
  </div>
  
    </>
  )
}

export default WhereWeWork