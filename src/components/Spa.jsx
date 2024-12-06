import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional effect

import spa from '../assets/images/spa.jpeg';
import spablack from '../assets/images/spablack.jpeg';
import spagiffy from '../assets/images/spagiffy.jpeg';
import spafyp from '../assets/images/spafyp.jpeg';
import spagirls from '../assets/images/spagirls.jpeg';
import spahot from '../assets/images/spahot.jpg';
import spalady from '../assets/images/spalady.jpg';
import spalit from '../assets/images/spalit.jpeg';
import spatrend from '../assets/images/spatrend.jpeg';
import spacheck from '../assets/images/spacheck.jpeg';
import spalas from '../assets/images/spalas.jpeg';
import spaim from '../assets/images/spaim.jpeg';

const Spa = () => {
  const spaImages = [
    { src: spa, alt: 'Tranquil spa setting with soothing lighting' },
    { src: spablack, alt: 'Luxurious spa ambience for ultimate relaxation' },
    { src: spagiffy, alt: 'Rediscover serenity with our calming spa treatments' },
    { src: spafyp, alt: 'Revitalizing spa experience featuring premium products' },
    { src: spagirls, alt: 'Relaxing group spa session with friends' },
    { src: spahot, alt: 'Hot stone therapy for muscle relaxation and stress relief' },
    { src: spalady, alt: 'Lady enjoying a rejuvenating facial at the spa' },
    { src: spalit, alt: 'Lit candles and aroma oils creating a serene spa atmosphere' },
    { src: spatrend, alt: 'Trendy spa interiors blending elegance and comfort' },
    { src: spacheck, alt: 'Spa checklist for a customized wellness experience' },
    { src: spalas, alt: 'Lasting rejuvenation from expert spa therapies' },
    { src: spaim, alt: 'Lasting rejuvenation spa therapies' },
  ];

  return (
    <>
      <div className="text-left lg:text-center py-6">
        <h3 className="text-4xl font-bold text-gray-800">Spa Service</h3>
        <p className="text-lg text-gray-500 mt-2">
          Indulge in a luxurious spa experience designed to refresh, rejuvenate, and relax. Whether you're looking for a soothing facial, a calming massage, or a revitalizing body treatment, our professional spa services will leave you feeling renewed and glowing. Treat yourself today to the ultimate pampering session!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4">
        {spaImages.map((image, index) => (
          <div key={index} className="w-full md:w-96 lg:w-80 h-80 rounded-lg overflow-hidden shadow-md">
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              effect="blur"
              height="100%"
              width="100%"
              wrapperProps={{
                style: {
                  transitionDelay: '1s',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                },
              }}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Spa;
