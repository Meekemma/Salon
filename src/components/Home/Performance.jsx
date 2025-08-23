import React, { useEffect } from 'react';
import '../../styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const metrics = [
  { value: '90%', description: 'Customer satisfaction rate' },
  { value: '200+', description: 'Clients served monthly' },
  { value: '2,500+', description: 'Happy clients to date' },
  { value: '5+', description: 'Years of experience' },
];

const Performance = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 mt-12 bg-[#FFF5EE] rounded-2xl shadow-md">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-600">
              {metric.value}
            </h1>
            <h2 className="text-sm sm:text-base mt-2 text-gray-700 font-medium">
              {metric.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
