import React from 'react'
import '../styles/Header.css';
import imageslider1 from '../images/Boy.png';
import imageslider2 from '../images/Untitled-2.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';





const header = () => {




  return (
    <div className="container9">


      <h1 id='rethink'><span id='one'>RETHINK </span><br /><span id='two'>RECYCLE</span> <br /><span id='three'>REUSE</span> </h1>

 
      <div id='carouselExampleFade'>

        <Carousel autoPlay interval="2000" transitionTime="1000" showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true}   >
          <img src={imageslider1} alt='' />
          <img src={imageslider2}  alt='' />
        </Carousel>

      </div> 
    </div>
  )
}

export default header