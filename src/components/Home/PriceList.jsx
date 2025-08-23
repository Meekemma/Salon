import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/main.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PriceList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const services = [
    {
      category: "Haircut Services",
      items: [
        { name: "Men's Haircut", price: "₦5,000 - ₦7,500" },
        { name: "Women's Haircut", price: "₦7,000 - ₦10,000" },
        { name: "Children's Haircut", price: "₦3,000 - ₦5,000" },
        { name: "Dreadlocks Installation", price: "₦20,000 - ₦40,000" },
        { name: "Hair Tinting/Coloring", price: "₦15,000 - ₦30,000" },
        { name: "Hair Relaxing", price: "₦8,000 - ₦15,000" },
        { name: "Beard Grooming", price: "₦4,000 - ₦6,000" },
        { name: "Cornrows", price: "₦10,000 - ₦20,000" },
        { name: "Hair Treatment", price: "₦12,000 - ₦25,000" },
        { name: "Hair Washing", price: "₦3,000 - ₦5,000" },
      ],
    },
    {
      category: "Nail Polishing",
      items: [
        { name: "Classic Nail Polish", price: "₦2,000 - ₦5,000" },
        { name: "Gel Nail Polish", price: "₦5,000 - ₦10,000" },
        { name: "Nail Art", price: "₦3,000 - ₦7,000" },
        { name: "French Tips", price: "₦4,000 - ₦8,000" },
        { name: "Matte Finish", price: "₦6,000 - ₦9,000" },
        { name: "Acrylic Nails", price: "₦10,000 - ₦15,000" },
        { name: "Nail Extensions", price: "₦12,000 - ₦20,000" },
        { name: "Cuticle Care", price: "₦2,500 - ₦5,000" },
        { name: "Glitter Polish", price: "₦4,000 - ₦7,000" },
        { name: "Paraffin Wax", price: "₦6,000 - ₦9,000" },
      ],
    },
    {
      category: "Pedicure & Manicure",
      items: [
        { name: "Classic Manicure", price: "₦5,000 - ₦7,000" },
        { name: "Deluxe Manicure", price: "₦8,000 - ₦12,000" },
        { name: "Classic Pedicure", price: "₦6,000 - ₦8,000" },
        { name: "Deluxe Pedicure", price: "₦10,000 - ₦15,000" },
        { name: "Combo (Manicure & Pedicure)", price: "₦20,000 - ₦25,000" },
        { name: "Foot Massage", price: "₦5,000 - ₦8,000" },
        { name: "Hand Massage", price: "₦4,000 - ₦7,000" },
        { name: "Nail Buffing", price: "₦3,000 - ₦5,000" },
        { name: "Cuticle Oil Treatment", price: "₦2,500 - ₦4,000" },
        { name: "Hot Towel Treatment", price: "₦7,000 - ₦10,000" },
      ],
    },
    {
      category: "Spa Services",
      items: [
        { name: "Full-Body Massage", price: "₦20,000 - ₦40,000" },
        { name: "Facials", price: "₦10,000 - ₦25,000" },
        { name: "Body Scrub", price: "₦15,000 - ₦30,000" },
        { name: "Hot Stone Therapy", price: "₦30,000 - ₦50,000" },
        { name: "Aromatherapy", price: "₦20,000 - ₦35,000" },
        { name: "Hydrotherapy", price: "₦25,000 - ₦45,000" },
        { name: "Deep Tissue Massage", price: "₦35,000 - ₦55,000" },
        { name: "Swedish Massage", price: "₦25,000 - ₦40,000" },
        { name: "Anti-Aging Treatment", price: "₦30,000 - ₦60,000" },
        { name: "Relaxation Therapy", price: "₦20,000 - ₦35,000" },
      ],
    },
  ];

  const [visibleItems, setVisibleItems] = useState(
    services.map(() => 5)
  );

  const toggleVisibility = (index) => {
    setVisibleItems((prev) =>
      prev.map((num, idx) => (idx === index ? (num === 5 ? 10 : 5) : num))
    );
  };

  return (
    <section 
      className="container mx-auto p-6"
      aria-labelledby="price-list-heading"
    >
      <h1 
        id="price-list-heading"
        className="text-3xl font-bold text-center mb-8"
      >
        Salon Services & Pricing
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
        aria-roledescription="carousel"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <article
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
              data-aos="fade-up"
            >
              <h2 className="text-xl font-semibold mb-4">{service.category}</h2>
              <ul>
                {service.items.slice(0, visibleItems[index]).map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between border-b py-2 last:border-none"
                  >
                    <span className="text-gray-500">{item.name}</span>
                    <span className="font-semibold text-yellow-600">{item.price}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleVisibility(index)}
                aria-label={`${
                  visibleItems[index] === 5 ? "Show more services" : "Show fewer services"
                } for ${service.category}`}
                className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-4 rounded transition"
              >
                {visibleItems[index] === 5 ? "More" : "Show Less"}
              </button>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PriceList;
