import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const[error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, phone, service, date, time } = formData;

    //Clear Previous error
    setError("")

    //curent date and time
    const now = new Date();
    const selectedDateTime = new Date(`${date}T${time}`);
    // Validation checks
    if(!name || !phone || !service || !date || !time){
        setError("All fields are required");
        setTimeout(() => {
            setError(""); // Clear the error after 3 seconds
            window.location.reload();
          }, 3000);
        return;
    }

    if (selectedDateTime < now ){
        setError("You cannot pick a past date or time!");
        setTimeout(() => {
            setError(""); // Clear the error after 3 seconds
            window.location.reload();
          }, 3000);
      return;
    }


    // Create WhatsApp URL
    const message = `*Hello! I'd like to book an appointment*.
    Name: ${formData.name}
    Phone: ${formData.phone}
    Service: ${formData.service}
    Date: ${formData.date}
    Time: ${formData.time}`;
    const whatsappUrl = `https://wa.me/2349076309004?text=${encodeURIComponent(message)}`;


    // Open WhatsApp link
    window.open(whatsappUrl, "_blank");

    //Reset the form after submission
    setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
    })
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Manicure">Manicure</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
