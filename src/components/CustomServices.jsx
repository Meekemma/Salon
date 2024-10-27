import React, { useState } from 'react';
import Haircut from './Haircut';
import Polishing from './Polishing';
import Padicure from './Padicure';
import Spa from './Spa';

const CustomServices = () => {
  const servicesList = ['Haircut', 'Nail Polishing', 'Padicure & Manicure', 'Spa'];
  const [activeService, setActiveService] = useState('Haircut');

  const handleOnClick = (service) => {
    setActiveService(service);
  };

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8 py-4'>
        {/* Service navigation */}
        <div className='flex flex-wrap justify-between space-x-3 sm:flex-nowrap overflow-x-auto'>
          {servicesList.map((service, index) => (
            <div
              key={index}
              onClick={() => handleOnClick(service)}
              className={`cursor-pointer font-bold text-lg 
                ${activeService === service ? 'text-[#C19A6B]' : 'text-gray-600'} 
                transition-colors duration-300 whitespace-nowrap`}
            >
              {service}
            </div>
          ))}
        </div>

        {/* Conditionally render the content based on the active service */}
        <div className='mt-6'>
          {activeService === 'Haircut' && <Haircut />}
          {activeService === 'Nail Polishing' && <Polishing />}
          {activeService === 'Padicure & Manicure' && <Padicure />}
          {activeService === 'Spa' && <Spa />}
        </div>
      </div>
    </>
  );
};

export default CustomServices;
