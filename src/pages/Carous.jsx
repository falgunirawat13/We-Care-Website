import React, { useState, useEffect } from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import carousel4 from "../assets/images/carousel4.jpg";
import carousel5 from "../assets/images/carousel5.jpg";
import "../styles/Carous.css"; 

const YourCarouselComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='car'>
    <MDBCarousel showIndicators>
      <MDBCarouselItem
        className={`w-100 d-block ${isSmallScreen ? 'carousel-item-small' : 'carousel-item-large1'}`}
        itemId={1}
        alt="..."
        src={carousel1}
      >
        {/* Content for the carousel item */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className={`w-100 d-block ${isSmallScreen ? 'carousel-item-small' : 'carousel-item-large1'}`}
        itemId={2}
        alt="..."
        src={carousel2}
      >
        {/* Content for the carousel item */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className={`w-100 d-block ${isSmallScreen ? 'carousel-item-small' : 'carousel-item-large1'}`}
        itemId={3}
        alt="..."
        src={carousel3}
      >
        </MDBCarouselItem>
      <MDBCarouselItem
        className={`w-100 d-block ${isSmallScreen ? 'carousel-item-small' : 'carousel-item-large1'}`}
        itemId={4}
        alt="..."
        src={carousel4}
      >
        {/* Content for the carousel item */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className={`w-100 d-block ${isSmallScreen ? 'carousel-item-small' : 'carousel-item-large1'}`}
        itemId={5}
        alt="..."
        src={carousel5}
      >
        {/* Content for the carousel item */}
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
};

export default YourCarouselComponent;
