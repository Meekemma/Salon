import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import facebook from '../assets/images/facebook.svg'; // Example image
import '../styles/main.css'; // Your custom CSS
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const MyCarousel = () => {
  return (
    <div className='carousel-image-wrapper'>
      <div className="carousel-container">
        <div className="flex flex-col md:flex-row items-center h-screen w-full">
          {/* Image Carousel */}
          <div className="carousel-image-container">
            <Carousel
              showArrows={false} // Disable arrows for a cleaner look
              autoPlay={true} // Autoplay
              infiniteLoop={true} // Infinite loop
              showStatus={false} // Hide status
              showThumbs={false} // Hide thumbnails
              interval={5000} // 5-second interval
            >
              <div>
                <LazyLoadImage 
                src={facebook} 
                alt="Image 1" 
                effect="blur" // You can choose other effects like "opacity", "black-and-white", etc.
                height="100%" 
                width="100%" 
                wrapperProps={{
                  style: { 
                    transitionDelay: "1s", // Wait 1 second before starting the transition effect
                    backgroundColor: "rgba(0,0,0,0.1)" // Optional: add styling to the wrapper itself
                  },
                }}
                className="carousel-image" />
              </div>
              <div>
                <LazyLoadImage 
                src={facebook} 
                alt="Image 2" 
                effect="blur" // You can choose other effects like "opacity", "black-and-white", etc.
                height="100%" 
                width="100%" 
                wrapperProps={{
                  style: { 
                    transitionDelay: "1s", // Wait 1 second before starting the transition effect
                    backgroundColor: "rgba(0,0,0,0.1)" // Optional: add styling to the wrapper itself
                  },
                }}
                className="carousel-image" />
              </div>
              {/* Add more images here */}
            </Carousel>
          </div>

          {/* Static Text Section */}
          <div className="carousel-text-container">
            <h1 className="carousel-title">Unleash Your Style, Elevate Your Glow</h1>
            <p className="carousel-description">
              Experience the art of personal care with professional haircuts, nail
              treatments, and luxurious spa services tailored for both men and
              women.
            </p>
            <button className="carousel-button">Book Your Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
