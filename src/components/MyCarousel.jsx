import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import styles
import '../styles/main.css'; // Your custom CSS
import facebook from '../assets/images/facebook.svg'; // Example image

import '../styles/main.css';
const MyCarousel = () => {
  return (
    <div className='carousel-container'>
      <div className='flex flex-col md:flex-row justify-between items-center p-5'>
        
        {/* Image Carousel */}
        <div className="carousel-image-container">
          <Carousel
            showArrows={false} // Disable arrows for cleaner look
            autoPlay={true} // Autoplay
            infiniteLoop={true} // Infinite loop
            showStatus={false} // Hide status
            showThumbs={false} // Hide thumbnails
            interval={5000} // 5 second interval
          >
            <div>
              <img src={facebook} alt='Image 1' className="carousel-image" />
            </div>
            <div>
              <img src={facebook} alt='Image 2' className="carousel-image" />
            </div>
            {/* Add more images here */}
          </Carousel>
        </div>


        {/* Static Text Section */}
        <div className="carousel-text-container">
          <h1 className="carousel-title">Unleash Your Style, Elevate Your Glow</h1>
          <p className="carousel-description">
              Experience the art of personal care with professional haircuts, nail treatments, and luxurious spa services tailored for both men and women
          </p>
          <button className="carousel-button">Book Your Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
