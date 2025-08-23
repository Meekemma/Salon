import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import L from 'leaflet';
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegComment } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomContact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Two locations
  const locations = [
    {
      label: 'Main Branch',
      coords: [6.4693, 3.3029],
      address: 'Swiss Park Mall, Opposite Unity Estate, Amuwo Odofin, Festac, Lagos, Nigeria',
      googleMaps: 'https://goo.gl/maps/LF8a6rF1w6Y2',
    },
    {
      label: 'Festac Branch',
      coords: [6.4732, 3.2932], // example coordinates for Festac Branch
      address: 'Swiss Park Hotel, 12 Road, Festac, Lagos',
      googleMaps: 'https://goo.gl/maps/XYZ123',
    },
  ];

  // Custom red icon
  const redIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <section className="container mx-auto px-6 sm:px-12 py-10">
      {/* Contact Form */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800" data-aos="fade-up">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6"
        data-aos="fade-up"
      >
        {/* Name */}
        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Full Name</label>
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
          <FaUser className="text-gray-500 mr-2" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-2 py-1 outline-none"
          />
        </div>

        {/* Email */}
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email Address</label>
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
          <FaEnvelope className="text-gray-500 mr-2" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-2 py-1 outline-none"
          />
        </div>

        {/* Phone */}
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">Phone Number</label>
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
          <FaPhoneAlt className="text-gray-500 mr-2" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-2 py-1 outline-none"
          />
        </div>

        {/* Message */}
        <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Message</label>
        <div className="flex items-start border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
          <FaRegComment className="text-gray-500 mt-1 mr-2" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Write your message here..."
            className="w-full px-2 py-1 outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition transform hover:scale-105 shadow-md"
        >
          Send Message
        </button>
      </form>

      {/* Map Section */}
      <div className="mt-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Find Us Here</h2>
        <MapContainer
          center={[6.4693, 3.3029]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-96 rounded-xl shadow-lg border"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            subdomains={['a','b','c']}
          />
          {locations.map((loc, idx) => (
            <Marker key={idx} position={loc.coords} icon={redIcon}>
              <Popup>
                <strong>{loc.label}</strong> <br />
                <a href={loc.googleMaps} target="_blank" rel="noopener noreferrer" className="underline">
                  {loc.address}
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default CustomContact;
