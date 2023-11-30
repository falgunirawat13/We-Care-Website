import React from 'react';
import '../styles/home.css';
import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import what1 from "../assets/images/what1.JPG";
import carousel1 from "../assets/images/carousel1.JPG";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg"
import carousel4 from "../assets/images/carousel4.JPG"
import carousel5 from "../assets/images/carousel5.JPG"
import card1 from "../assets/images/Card1.jpg";
import card22 from "../assets/images/Card22.jpg";
import card33 from "../assets/images/Card33.jpg";
import TreesPlantedAnimation from './countup';
import LivesImpactedAnimation from './countuplives';
import PlaysAnimation from './countupplays';
import SchoolsAnimation from './countupschools';
import growingtree from '../assets/images/growingtree.png';
import school from '../assets/images/school.png';
import thumbsup from '../assets/images/thumbsup.png';
import streetplays from '../assets/images/streetplays.png';
import { MDBCarousel , MDBAccordion, MDBAccordionItem , MDBCarouselItem } from 'mdb-react-ui-kit';
import Testimonials from './testimonials';

const Home = () => {
  return (
    <>
    <section>
    <div>
    <MDBCarousel showIndicators >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        alt='...'
        src={carousel1}
            style={{  height: '510px' , borderRadius:'0' , objectFit:'cover' }}
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={carousel2}
        alt='...'
        style={{height: '510px' , borderRadius:'0' , objectFit:'cover'}}
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={carousel3}
        alt='...'
        style={{ height: '510px' , borderRadius:'0' , objectFit:'cover'}}
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block '
        itemId={4}
        src={carousel4}
        alt='...'
        style={{  height: '510px' , borderRadius:'0' , objectFit:'cover'}}
      >
        <h5>Fourth slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={carousel5}
        alt='...'
        style={{ height: '510px' , borderRadius:'0' , objectFit:'cover'}}
      >
        <h5>Fifth slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    
    </div>
    </section>
    <section className='Who'>
    <Container>
      <Row>
      <Col lg='6' className='text-center' style={{ marginLeft:'-40px' , marginRight:'20px'}}>
      <MDBCarousel showIndicators fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        alt='...'
        src={carousel1}
            style={{  height: '390px' , borderRadius:'0' , objectFit:'cover' }}
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={carousel2}
        alt='...'
        style={{height: '390px' , borderRadius:'0' , objectFit:'cover'}}
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={carousel3}
        alt='...'
        style={{ height: '390px' , borderRadius:'0' , objectFit:'cover'}}
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block '
        itemId={4}
        src={carousel4}
        alt='...'
        style={{  height: '390px' , borderRadius:'0' , objectFit:'cover'}}
      >
        <h5>Fourth slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={carousel5}
        alt='...'
        style={{ height: '410px' , borderRadius:'0' , objectFit:'cover'}}
      >
        <h5>Fifth slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
        </Col>
        <Col lg='6' className='Content1'>
         <div>
         <div className="aboutheading">
         <a href="/AboutUs"><h4 style={{color:"black"}}>About Us</h4></a>
         </div>         
          <h1 class="main-head">WHO WE ARE</h1>
             <p> Founded on the belief that small actions can lead to significant change, WeCare is just a group of teenagers trying to make a difference in the lives of the underprivileged section of society. 
              <br/><br/>
              Our goal is to empower communities, nurture dreams, and create a world where everyone has the opportunity to thrive. 
              <br/><br/>
              At the heart of our mission is Bachpanshala, a project that bridges the gap between dreams and reality, and together with your support, we aim to make a lasting impact on the lives of those we serve.
             </p>
              </div>
        </Col>
        
      </Row>
    </Container>
  </section>   
  <section className='What'>
    <Container >
      <Row>
        <Col lg='6' md='12' style={{marginLeft:'-42px'}}>        
          <div className="Content2">
            <div className='Main2'>
             <h1 class="main-head">WHAT WE DO? </h1>
             <br/>
             <p>
             At WeCare, we shift compassion into concrete change. We're dedicated to providing quality education, ensuring essential healthcare access, supporting communities, spreading awareness, and advocating for vital causes.
             <br/><br/>
             Our Bachpanshala is a project that shrinks the gap between dreams and reality by teaching underprivileged children. We also offer volunteering opportunities, and our collective efforts are focused on turning dreams into reality and fostering positive change in the lives of those we serve.
              </p>
         </div>
         </div>
        </Col>
        <Col lg='6' md='12'style={{marginLeft:'25px'}}>
        <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        alt='...'
        src={card33}
            style={{  height: '390px' , borderRadius:'0' , objectFit:'cover' }}
      >
    
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={carousel2}
        alt='...'
        style={{height: '390px' , borderRadius:'0' , objectFit:'cover'}}
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={carousel3}
        alt='...'
        style={{ height: '390px' , borderRadius:'0' , objectFit:'cover'}}
      >

      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block '
        itemId={4}
        src={carousel4}
        alt='...'
        style={{  height: '390px' , borderRadius:'0' , objectFit:'cover'}}
      >
    
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={carousel5}
        alt='...'
        style={{ height: '390px' , borderRadius:'0' , objectFit:'cover'}}
      >
      
      </MDBCarouselItem>
    </MDBCarousel>
        </Col>
      </Row>
    </Container>
  </section>
  <section className='Camp' >
    <Container>
      <Row>
     <Col lg='12' className='text-center'>
      <h1 class="main-head" style={{marginTop:'1%'}}>
        OUR INITIATIVES
      </h1>
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, itaque!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ipsam sequi
         esse rerum mollitia deserunt. Sint dolore quam magnam quos.</p>
      <br/>
      </Col>     
      <Col lg='4' md='6' sm='12' style={{marginBottom:'3%'}}>
      <Card className='cardcamp'  style={{ width: '100%'}}>
      {/* <Card.Img className='cardi' variant="top" src={card1} /> */}
      <MDBCarousel >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        alt='...'
        src={card1}
            style={{  height: '250px' , borderRadius:'0' , objectFit:'cover' }}
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={carousel2}
        alt='...'
        style={{height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={carousel3}
        alt='...'
        style={{ height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block '
        itemId={4}
        src={carousel4}
        alt='...'
        style={{  height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
       
      </MDBCarouselItem>
    </MDBCarousel>
      <Card.Body>
        <Card.Title>  Bachpanshala: Nurturing Bright Futures with Joyful Learning</Card.Title>
        <Card.Text  className='Content5'>
      At the heart of We Care's mission lies our major initiative, Bachpanshala—a transformative journey that began with a handful of eager minds and a vision to break the cycle of limited opportunities. Established to provide education to underprivileged children in slums, Bachpanshala has evolved into a vibrant community of learning, growth, and joy.Together, we are sowing the seeds of change and nurturing the potential of each child, one joyful moment at a time.

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>   
        <Col lg='4'  md='6' sm='12'>
      <Card className='cardcamp' style={{ width: '100%' }}>
      {/* <Card.Img className='cardi' variant="top" src={card22} /> */}
      <MDBCarousel >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        alt='...'
        src={card22}
            style={{  height: '250px' , borderRadius:'0' , objectFit:'cover' }}
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={carousel2}
        alt='...'
        style={{height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={carousel3}
        alt='...'
        style={{ height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block '
        itemId={4}
        src={carousel4}
        alt='...'
        style={{  height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
     
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={carousel5}
        alt='...'
        style={{ height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
       
      </MDBCarouselItem>
    </MDBCarousel>
      <Card.Body>
        <Card.Title>Charity Cup: Kicking Goals for a Cause</Card.Title>
        <Card.Text  className='Content5'>

Welcome to Charity Cup, We Care's fundraising initiative dedicated
 to making a positive impact. This football tournament isn't just about goals on the field;
  it's about scoring for the well-being of underprivileged kids and societies. 
  Every penny raised is channeled towards the welfare of those in need. 
  Join us in turning the spirit of competition into a force for good and positive impact. Together,
   let's play for a cause and make a lasting and effective difference in the lives of the less fortunate and build brighter futures.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>   
        <Col lg='4'md='6' sm='12'>
      <Card className='cardcamp' style={{ width: '100%' }}>
      {/* <Card.Img className='cardi' variant="top" src={card33} /> */}
      <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        alt='...'
        src={card33}
            style={{  height: '250px' , borderRadius:'0' , objectFit:'cover' }}
      >
    
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={carousel2}
        alt='...'
        style={{height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={carousel3}
        alt='...'
        style={{ height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >

      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block '
        itemId={4}
        src={carousel4}
        alt='...'
        style={{  height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
    
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={carousel5}
        alt='...'
        style={{ height: '250px' , borderRadius:'0' , objectFit:'cover'}}
      >
      
      </MDBCarouselItem>
    </MDBCarousel>
      <Card.Body>
        <Card.Title>Road Safety Initiative: Building a Safer Tomorrow
</Card.Title>
<Card.Text  className='Content5'>       
In the realm of safety concerns, We Care takes a proactive stance on road safety—a major priority. Through dynamic initiatives like street plays, rallies, acts, and on-ground awareness camps, we champion the cause of safer streets. Join us in promoting responsible road behavior and ensuring a secure future for all , and fostering community safety together.
 Together, let's drive change and make our roads much more safer, one awareness campaign at a time.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>   
      </Row>
    </Container>
  </section>   
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
<section className='Who'>
    <Container>
      <Row>
      <Col lg='12' className='text-center'>
      <h1 class="main-head">TESTIMONIALS</h1>   
        </Col>  
      </Row>
           
      <Row>
    <Testimonials/>
      </Row>
      
      
    </Container>

  </section>   
  <section className='question'>
    <Container>
      <Row>
     <Col lg='12'className='text-center'>
      <h1 class="main-head" style={{marginTop:'2%' , marginBottom:'1%'}}>
        QUESTIONS ?
      </h1>      
      </Col>                 
      </Row>
      <Row>
      <Col lg='6'>
       <MDBAccordion>
         {/* initialActive={1} */}
      <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'  style={{ marginBottom: '10px' }}>
        t's also worth noting that just about any HTML can go
        within the
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'  style={{ marginBottom: '10px' }}>
        hough the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'  style={{ marginBottom: '10px' }}>
        though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={4} headerTitle='Accordion Item #4'  style={{ marginBottom: '10px' }}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={5} headerTitle='Accordion Item #5'  style={{ marginBottom: '10px' }}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      
    </MDBAccordion>
    </Col>
    <Col lg='6'>
      <MDBAccordion>
      <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1' style={{ marginBottom: '10px' }}>
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2' style={{ marginBottom: '10px' }}>
        It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3' style={{ marginBottom: '10px' }}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding 
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={4} headerTitle='Accordion Item #4' style={{ marginBottom: '10px' }}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={5} headerTitle='Accordion Item #5'>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      
    </MDBAccordion>
    </Col>
    
      </Row>
    </Container>
  </section>  
  
    </>
  )
}

export default Home 