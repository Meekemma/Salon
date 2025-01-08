import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import JuiceH from '../assets/images/JuiceH.jpeg';
import Press from '../assets/images/Press.jpeg';
import '../styles/main.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const MyCarousel = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/booking');
  };

  const images = [
    { src: JuiceH, alt: 'Relaxing Juice Bar' },
    { src: Press, alt: 'Luxurious Spa Treatment' },
  ];

  return (
    <div className="carousel-image-wrapper">
      <div className="carousel-container">
        <div className="flex flex-col md:flex-row items-center h-screen w-full">
          {/* Image Carousel */}
          <div className="carousel-image-container w-full h-[80vh] sm:h-[80vh] md:h-screen">
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              interval={5000}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    effect="blur"
                    height="100%"
                    width="100%"
                    className="carousel-image"
                  />
                </div>
              ))}
            </Carousel>
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
