import React, { useState } from 'react';
import Haircut from './Haircut';
import Polishing from './Polishing';
import Padicure from './Padicure';
import Spa from './Spa';

const CustomServices = () => {
  const servicesList = [
    { name: 'Haircut', icon: '💇‍♂️' },
    { name: 'Nail Polishing', icon: '💅' },
    { name: 'Padicure & Manicure', icon: '👐' },
    { name: 'Spa', icon: '💆‍♀️' },
  ];

  const [activeService, setActiveService] = useState('Haircut');

  const handleOnClick = (service) => {
    setActiveService(service);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
        Our <span className="text-yellow-500">Services</span>
      </h2>

      {/* Service navigation */}
      <div className="flex justify-center gap-4 sm:gap-8 flex-wrap">
        {servicesList.map((service, index) => (
          <button
            key={index}
            onClick={() => handleOnClick(service.name)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 
              ${
                activeService === service.name
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-400 text-white scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <span className="text-xl">{service.icon}</span>
            {service.name}
          </button>
        ))}
      </div>

      {/* Conditionally render the content based on the active service */}
      <div className="mt-10">
        {activeService === 'Haircut' && <Haircut />}
        {activeService === 'Nail Polishing' && <Polishing />}
        {activeService === 'Padicure & Manicure' && <Padicure />}
        {activeService === 'Spa' && <Spa />}
      </div>
    </div>
  );
};

export default CustomServices;
