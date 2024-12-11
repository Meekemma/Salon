import React, { useState } from "react";
import salon from '../assets/images/man.jpg'; // Importing the salon image
import Spinner from './Spinner'; // Make sure Spinner component is imported

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, phone, service, date, time } = formData;

    // Clear previous error
    setError("");
    setIsLoading(true); // Start loading when the form is submitted

    // Current date and time
    const now = new Date();
    const selectedDateTime = new Date(`${date}T${time}`);
    
    // Validation checks
    if (!name || !phone || !service || !date || !time) {
      setError("All fields are required");
      setTimeout(() => {
        setError("");
        setIsLoading(false); // Stop loading if there's an error
      }, 3000);
      return;
    }

    if (selectedDateTime < now) {
      setError("You cannot pick a past date or time!");
      setTimeout(() => {
        setError("");
        setIsLoading(false); // Stop loading if there's an error
      }, 3000);
      return;
    }

    // Create WhatsApp URL
    const message = `*Hello! I'd like to book an appointment*.\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}`;
    const whatsappUrl = `https://wa.me/2349076309004?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link
    window.open(whatsappUrl, "_blank");

    // Reset the form after submission
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });

    // Stop loading after the process
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-start container px-4 py-8 gap-10">
      {/* Salon image section */}
      <div className="flex justify-center w-full md:w-1/2 mt-0 md:mt-0">
        <img src={salon} alt="Salon" className="w-full max-w-md h-auto rounded-lg shadow-md"  loading="lazy"/>
      </div>

      {/* Booking form section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
        {/* Guide Text */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">How to Book Your Appointment</h3>
          <p className="text-lg text-gray-600">
            Follow the steps below to easily book an appointment with us:
          </p>
          <ol className="list-decimal list-inside text-gray-600 mt-4">
            <li className="mb-2">Fill in your name and phone number for us to contact you.</li>
            <li className="mb-2">Choose the service you'd like to book (e.g., Haircut or Manicure).</li>
            <li className="mb-2">Pick your preferred date and time for the appointment.</li>
            <li className="mb-2">Click "Submit" to send your details directly to us via WhatsApp.</li>
            <li className="mb-2">We will confirm your appointment as soon as possible.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-center text-teal-600 mb-6">Book an Appointment</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Service</option>
            <optgroup label="In-Salon Services">
              <option value="haircut">Haircut</option>
              <option value="nail-polish">Nail Polish</option>
              <option value="manicure">Manicure</option>
              <option value="pedicure">Pedicure</option>
              <option value="spa">Spa</option>
            </optgroup>
            <optgroup label="Home Services">
              <option value="home-haircut">Home Service Haircut</option>
              <option value="home-polish">Home Service Polish</option>
              <option value="home-manicure">Home Service Manicure</option>
              <option value="home-pedicure">Home Service Pedicure</option>
              <option value="home-spa">Home Service Spa</option>
            </optgroup>
          </select>

          
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {isLoading ? (
              <Spinner size={20} color="#ffffff" />
            ) : ("Submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
