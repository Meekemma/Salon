import React from 'react'
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
      <div className='flex justify-between flex-wrap space-x-3 space-y-3'>
        {metrics.map((metric, index) => (
          <div key={index} className='flex flex-col px-8'>
            <h1 className='text-4xl font-bold flex justify-center'>{metric.value}</h1>
            <h2>{metric.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Performance;
