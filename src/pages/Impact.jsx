import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import TreesPlantedAnimation from './countup';
import LivesImpactedAnimation from './countuplives';
import PlaysAnimation from './countupplays';
import SchoolsAnimation from './countupschools';
import growingtree from '../assets/images/growingtree.png';
import school from '../assets/images/school.png';
import thumbsup from '../assets/images/thumbsup.png';
import streetplays from '../assets/images/streetplays.png';

const Impact = () => {
  return (
    <>
     <section className='impact'style={{background:' #c7fbff'}}>
  <Container>
    <Row>
      <Col lg='12' className='text-center'>
        <h1 className="main-head" style={{marginTop:'2%'}}>
          OUR IMPACT
          </h1>
        <p>
          “No step is too small on the road to social reform.” <br/>
          Focusing on bringing change from the bottom-up, we have curated campaigns focused on the grassroots level, with our impact reaching far and wide.
        </p>
      </Col>
    </Row>
    <Row className='animated' style={{ gap:'2%'}}>
      <Col  className='animsection text-center impactCard' style={{ borderRadius:'15px' }}>
        <img
          className="move-up-image "  // Added mb-3 class for margin-bottom
          src={growingtree} alt='growingtree' style={{ width: '80%', height: '68%' }}
        />
        <TreesPlantedAnimation/>
        <h3 class='main-head1'>TREES PLANTED</h3>
        
      </Col>
      <Col  className='animsection text-center impactCard' style={{ borderRadius:'15px' }}>
        <img
          className="move-up-image "  // Added mb-3 class for margin-bottom
          src={thumbsup} alt='school' style={{ width: '102%', height: '57%', borderRadius: '0px',marginTop:'40px' }}
        />
        <LivesImpactedAnimation/>
        <h3 class='main-head1'>LIVES IMPACTED</h3>
        
      </Col>
      <Col  className='animsection text-center impactCard' style={{ borderRadius:'15px' }}>
        <img
          className="move-up-image"  // Added mb-3 class for margin-bottom
          src={school} alt='schools' style={{ width: '89%', height: '70%', marginBottom:'-7px'}}
        />
        <SchoolsAnimation/>
        <h3 class='main-head1'>SCHOOLS</h3>
        
      </Col>
      <Col  className='animsection text-center impactCard' style={{ borderRadius:'15px' }}>
        <img
          className="move-up-image "  // Added mb-3 class for margin-bottom
          src={streetplays} alt="streetplay" style={{ width: '95%', height: '80%', marginBottom:'-20px',marginTop:'-21px' }}
        />
          <PlaysAnimation/>
        <h3 class='main-head1'>STREET PLAYS</h3>
      
      </Col>
    </Row>
  </Container>
</section>
<section className='impact' style={{background:' #c7fbff' , marginBottom:'-100px'}}>
  <Container>
    <Row className='animated' style={{ gap:'2%'}}>
      <Col  className='animsection text-center impactCard' style={{ borderRadius:'15px' }}>
        <img
          className="move-up-image "  // Added mb-3 class for margin-bottom
          src={growingtree} alt='growingtree' style={{ width: '80%', height: '68%' }}
        />
        <TreesPlantedAnimation/>
        <h3 class='main-head1'>TREES PLANTED</h3>
        
      </Col>
      <Col  className='animsection text-center impactCard' style={{ borderRadius:'15px' }}>
        <img
          className="move-up-image "  // Added mb-3 class for margin-bottom
          src={thumbsup} alt='school' style={{ width: '102%', height: '57%', borderRadius: '0px',marginTop:'40px' }}
        />
        <LivesImpactedAnimation/>
        <h3 class='main-head1'>LIVES IMPACTED</h3>
        
      </Col>
      <Col  className='animsection text-center impactCard' style={{ borderRadius:'15px' }}>
        <img
          className="move-up-image"  // Added mb-3 class for margin-bottom
          src={school} alt='schools' style={{ width: '89%', height: '70%', marginBottom:'-7px'}}
        />
        <SchoolsAnimation/>
        <h3 class='main-head1'>SCHOOLS</h3>
        
      </Col>
      <Col  className='animsection text-center impactCard' style={{ borderRadius:'15px' }}>
        <img
          className="move-up-image "  // Added mb-3 class for margin-bottom
          src={streetplays} alt="streetplay" style={{ width: '95%', height: '80%', marginBottom:'-20px',marginTop:'-21px' }}
        />
          <PlaysAnimation/>
        <h3 class='main-head1'>STREET PLAYS</h3>      
      </Col>
    </Row>
  </Container>
</section>
    </>
  )
}

export default Impact