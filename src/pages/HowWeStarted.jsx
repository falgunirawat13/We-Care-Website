import React from 'react'
import carousel5  from '../assets/images/carousel3.jpg';
import "../styles/WeStarted.css";

const HowWeStarted = () => {
  return (
    <>
    <div class="image-container">
      <img src={carousel5} alt="" style={{objectFit:'cover', width:"100%", height:"400px", borderRadius:'0'}}/>
      <div class="image-text">
       HOW WE STARTED
    </div>
  </div>
  <div>
    <h4 className='head1'><br/> Inception of We Care: A Spark of Compassion </h4>
    <p className='para1'>
<br></br>We Care was born from a simple yet powerful spark of compassion in 2020. It all began with a shared belief that positive change starts with individual actions. Three dedicated individuals initiated the journey, driven by a profound desire to make a meaningful impact on the lives of those in need.
<br/><br/>The vision was clear – to create an organization that would serve as a beacon of hope and support for the underprivileged. With a commitment to addressing critical issues such as child education, women's empowerment, and animal welfare, We Care took its first steps towards building a better future for all.

Our founders started small, working hands-on to make a difference. <br></br><br/>The initial focus was on teaching underprivileged children in slums through the Bachpanshala initiative. As the impact grew, so did the team, evolving from a trio of passionate individuals to a dedicated force of 40 volunteers, all united by the common goal of fostering positive change.

<br/><br/>The heart of We Care lies in its commitment to holistic approaches, innovative solutions, and community engagement. Whether it's through Bachpanshala, our road safety initiatives, or the Charity Cup fundraising event, every endeavor reflects our founders' initial vision of creating a more compassionate and inclusive world.

<br/><br/>From that initial spark of compassion, We Care has evolved into a dynamic force for good, driven by the collective determination to create lasting positive change. As we continue to grow, our roots remain firmly grounded in the belief that together, through small yet impactful actions, we can build a better and brighter future for everyone.<br/><br/>
    </p>
  </div>
  
    </>
  )
}

export default HowWeStarted