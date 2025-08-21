import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Handsome from '../../assets/images/Handsome.jpeg';
import Nudenails from '../../assets/images/Nudenails.jpeg';
import spaim from '../../assets/images/spaim.jpeg';
import nailtech from '../../assets/images/nailtech.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomeGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const images = [
    { src: Handsome, alt: 'Modern haircut with stylish fade' },
    { src: Nudenails, alt: 'Elegant nude nail polish design' },
    { src: spaim, alt: 'Relaxing spa ambiance with candles' },
    { src: nailtech, alt: 'Professional nail technician at work' },
  ];

  const swiperRef = useRef(null);

  return (
    <section 
      className="mx-auto py-12 px-4 gallery-section text-white"
      aria-labelledby="gallery-heading"
    >
      <div className="flex flex-wrap justify-between items-center">
        
        {/* Info section */}
        <div 
          className="gallery-info w-full lg:w-1/3 pr-0 lg:pr-8 mb-8 lg:mb-0"
          data-aos="fade-right"
        >
          <h1 
            id="gallery-heading"
            className="text-2xl lg:text-3xl font-bold mb-4"
          >
            Explore Our Creative Masterpieces
          </h1>
          <p className="mb-4 text-gray-400 leading-relaxed">
            From stylish haircuts to exquisite nail art, our gallery showcases 
            the artistry and care we put into every service. 
            Discover what makes us unique and why clients keep coming back.
          </p>
        </div>

        {/* Swiper section */}
        <div 
          className="gallery-swiper w-full lg:w-2/3 relative"
          data-aos="fade-left"
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            loop={true}
            aria-roledescription="carousel"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <figure className="relative rounded-xl overflow-hidden group">
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    effect="blur"
                    className="w-full h-[350px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="sr-only">{image.alt}</figcaption>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev & Next buttons */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md transition z-10"
          >
            &#9664;
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md transition z-10"
          >
            &#9654;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomeGallery;
