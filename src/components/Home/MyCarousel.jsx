import React, { useState, useEffect } from 'react';
import JuiceH from '../../assets/images/JuiceH.jpeg';
import Press from '../../assets/images/Press.jpeg';
import '../../styles/main.css';
import { useNavigate } from 'react-router-dom';

const MyCarousel = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: JuiceH, alt: 'Relaxing Juice Bar' },
    { src: Press, alt: 'Luxurious Spa Treatment' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleOnClick = () => navigate('/booking');

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
          role="img"
          aria-label={image.alt}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Unleash Your{' '}
            <span className="text-yellow-400">Style</span>, Elevate Your{' '}
            <span className="text-yellow-400">Glow</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Experience the art of personal care with professional{' '}
            <span className="text-yellow-300">haircuts</span>,{' '}
            <span className="text-yellow-300">nail treatments</span>, and
            luxurious spa services tailored for both men and women.
          </p>
          <button
            onClick={handleOnClick}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:opacity-90 transition-all"
          >
            Book Your Appointment
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition ${
              i === currentImage ? 'bg-yellow-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MyCarousel;
