import React, { useEffect } from 'react';
import '../styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const metrics = [
  { value: '95%', description: 'Customer satisfaction rate' },
  { value: '500+', description: 'Clients served monthly' },
  { value: '10,000+', description: 'Happy clients to date' },
  { value: '10+', description: 'Years of combined experience' },
];

const Performance = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="container test mx-auto py-8 px-4 mt-8 bg-[#FFF5EE]">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <h1 className="text-3xl sm:text-4xl font-bold">{metric.value}</h1>
            <h2 className="text-sm sm:text-base text-gray-600 mt-2">
              {metric.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
