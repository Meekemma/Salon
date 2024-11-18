import React from 'react';
import '../styles/main.css';

const metrics = [
  { value: '12%', description: 'Metric description' },
  { value: '15%', description: 'Metric description' },
  { value: '#200,000', description: 'Metric description' },
  { value: '20%', description: 'Metric description' },
];

const Performance = () => {
  return (
    <div className='container test mx-auto py-8 px-4 mt-8 bg-[#FFF5EE]'>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {metrics.map((metric, index) => (
          <div key={index} className='flex flex-col items-center text-center'>
            <h1 className='text-3xl sm:text-4xl font-bold'>{metric.value}</h1>
            <h2 className='text-sm sm:text-base text-gray-600 mt-2'>
              {metric.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
