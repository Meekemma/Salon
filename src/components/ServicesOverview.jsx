import React from 'react';
import { FaCut, FaSpa, FaHandSparkles, FaPaintBrush } from 'react-icons/fa'; // Using FontAwesome for now
import { Card, CardContent, Typography } from '@mui/material'; // Material UI
import '../styles/main.css'; // Import custom styles

const ServicesOverview = () => {
  const services = [
    {
      icon: <FaCut size={50} className="text-gold" />, // Barber icon
      title: 'Barbering',
      description: 'Stylish cuts and expert grooming tailored to your unique look.'
    },
    {
      icon: <FaPaintBrush size={50} className="text-gold" />, // Nail polish icon
      title: 'Nail Polish',
      description: 'High-quality polish for flawless, long-lasting nails.'
    },
    {
      icon: <FaHandSparkles size={50} className="text-gold" />, // Manicure icon
      title: 'Manicure',
      description: 'Pamper your hands with our professional manicure services.'
    },
    {
      icon: <FaHandSparkles size={50} className="text-gold" />, // Pedicure icon
      title: 'Pedicure',
      description: 'Experience luxurious foot care and nail perfection.'
    },
    {
      icon: <FaSpa size={50} className="text-gold" />, // Spa icon
      title: 'Spa Treatments',
      description: 'Relax and rejuvenate with our personalized spa services.'
    },
  ];

  

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="text-center">
              {service.icon}
              <Typography variant="h6" className="mt-4">{service.title}</Typography>
              <Typography variant="body1" className="mt-2">{service.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      
    </div>
  );
}

export default ServicesOverview;
