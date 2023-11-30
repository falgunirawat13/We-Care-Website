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
    <SocialIcon network="facebook" url="" className='me-2' />
    <SocialIcon network="instagram" url="" className='me-2' />
    <SocialIcon network="linkedin" url="" className='me-2' />
    <SocialIcon network="youtube" url="" className='me-2' />
    </div>
    </div>
  )
}

export default Starter
