import React from 'react'
import logo from '../../assets/icons/logo.jpg'
import './Starter.css'
import { SocialIcon } from 'react-social-icons';

const Starter = () => {
  return (
    <div className='example' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '70px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
    
          <img src={logo} alt="" />
    
        <h4 className="head">We Care Social Welfare Society!</h4>
      </div>
              
      <div className='iconss'>
    {/* <SocialIcon network="facebook" url="" className='me-2' /> */}
    <SocialIcon network="instagram" url="https://www.instagram.com/wecareorgg/" className='me-2' />
    <SocialIcon network="linkedin" url="https://www.linkedin.com/company/wecare-me/" className='me-2' />
    <SocialIcon network="youtube" url="https://www.youtube.com/channel/UChatyDOKLvb6rVoMxJkYg6g" className='me-2' />
    </div>
    </div>
  )
}

export default Starter
