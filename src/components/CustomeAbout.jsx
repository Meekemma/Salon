import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaThumbsUp, FaHeart, FaCut } from 'react-icons/fa'; 
import Angel from '../assets/images/Angel.jpg';
import AngelWhite from '../assets/images/AngelWhite.jpg'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/main.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomeAbout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const images = [Angel, AngelWhite]; 

  const benefits = [
    'Expert professionals with years of experience.',
    'High-quality, premium products used in every service.',
    'Personalized treatments tailored to individual needs.',
    'A relaxing and luxurious environment for complete rejuvenation.',
    'Commitment to cleanliness and safety.'
  ];
  
  return (
    <>
      <div className='container mx-auto px-8 py-4'>
        <div className='flex flex-col justify-between md:flex-row items-start p-5'>
          {/* Text section */}
          <div className='md:w-1/2'>
            <h1 className='text-2xl font-bold mb-4 underline flex items-center' data-aos="fade-up">
              <FaBook className='mr-2' /> Our Story
            </h1>
            <p className='text-base' data-aos="fade-up">
              Welcome to <span className="font-bold text-xl text-gray-600">Angel DE Whyte Unisex Salon</span>, where grooming meets luxury and self-care becomes an art. 
              With a passion for excellence, our skilled team of barbers, nail technicians, and spa specialists are committed to delivering an experience that leaves you feeling refreshed, confident, and looking your absolute best. 
              Whether you're here for a stylish haircut, a flawless manicure, or a rejuvenating spa treatment, 
              we pride ourselves on providing personalized services tailored to your unique needs.
            </p>

            <div className="mt-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-4 underline flex items-center">
                <FaThumbsUp className='mr-2' /> Why Choose Us
              </h2>
              <ul className="list-disc list-inside">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-lg">{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold underline flex items-center">
                <FaHeart className='mr-2' /> Our Values
              </h2>
              <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-gray-600">
                <li><strong>Quality First:</strong> We use only the best products in all our treatments.</li>
                <li><strong>Expert Professionals:</strong> Our team is highly trained in the latest techniques.</li>
                <li><strong>Personalized Care:</strong> We tailor each service to meet your unique needs.</li>
                <li><strong>Client-Centered:</strong> Your satisfaction is our top priority.</li>
              </ul>
            </div>
          </div>

          {/* Carousel section */}
          <div className='md:w-1/2 rounded'>
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
                    src={image} 
                    alt={`carousel-img-${index}`} 
                    effect="blur" 
                    height="100%" 
                    width="100%" 
                    wrapperProps={{
                      style: { 
                        transitionDelay: "1s", 
                      },
                    }}
                    className="w-full md:max-w-md lg:max-w-lg mx-auto"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="mt-8 mx-auto px-8 py-4">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center" data-aos="fade-up">
            <FaCut className="mr-2" /> Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600" data-aos="fade-up">
            From precise barbering and luxurious spa treatments to flawless manicures and pedicures, we offer a range of premium grooming services tailored to your needs. 
          </p>
          <a onClick={()=> navigate('/services')} className="mt-4 inline-block text-gold font-semibold carousel-button whitespace-nowrap cursor-pointer" data-aos="fade-up">
            Explore all our services
          </a>
        </div>

      </div>
    </>
  );
};

export default CustomeAbout;
