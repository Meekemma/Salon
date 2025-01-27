import React, { useState, useEffect } from 'react';
import JuiceH from '../assets/images/JuiceH.jpeg';
import Press from '../assets/images/Press.jpeg';
import '../styles/main.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const MyCarousel = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: JuiceH, alt: 'Relaxing Juice Bar' },
    { src: Press, alt: 'Luxurious Spa Treatment' },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Handle button click
  const handleOnClick = () => {
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div className="carousel-image-wrapper">
      <div className="carousel-container">
        <div className="flex flex-col md:flex-row items-center h-screen w-full">
          {/* Image Carousel */}
          <div className="carousel-image-container w-full h-[80vh] sm:h-[80vh] md:h-screen">
            <LazyLoadImage
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              effect="blur"
              height="100%"
              width="100%"
              className="carousel-image"
            />
          </div>

          {/* Static Text Section */}
          <div className="carousel-text-container text-left md:text-left">
            <h1 className="carousel-title">Unleash Your Style, Elevate Your Glow</h1>
            <p className="carousel-description">
              Experience the art of personal care with professional haircuts, nail
              treatments, and luxurious spa services tailored for both men and women.
            </p>
            <button className="carousel-button" onClick={handleOnClick}>
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;