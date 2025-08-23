import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/main.css"; 

const FaqList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const faqs = [
    { question: "What are your salon hours?", answer: "We are open from 9 AM to 8 PM, Monday to Sunday." },
    { question: "Do you accept walk-ins?", answer: "Yes, we accept walk-ins, but appointments are preferred." },
    { question: "What payment methods do you accept?", answer: "We accept cash, card payments, and mobile money." },
    { question: "Do you offer bridal packages?", answer: "Yes, we offer personalized bridal packages." },
    { question: "Can I change my appointment?", answer: "Yes, appointments can be rescheduled with 24-hour notice." },
    { question: "Do you offer student discounts?", answer: "Yes, we offer a 10% discount for students." },
    { question: "What hair products do you use?", answer: "We use professional hair products from trusted brands like L'Oréal and Redken." },
    { question: "Do you offer spa services?", answer: "Yes, we offer a range of spa services including massages, facials, and body scrubs." },
    { question: "Are your services gender-specific?", answer: "No, our services are available for all genders." },
  ];

  const [visibleFaqs, setVisibleFaqs] = useState(Array(5).fill(false));
  const [showAll, setShowAll] = useState(false);

  const toggleVisibility = (index) => {
    setVisibleFaqs((prev) =>
      prev.map((isVisible, idx) => (idx === index ? !isVisible : isVisible))
    );
  };

  const toggleShowMore = () => {
    setShowAll((prev) => !prev);
    setVisibleFaqs((prev) => {
      return prev.length === faqs.length
        ? Array(5).fill(false)
        : Array(faqs.length).fill(false);
    });
  };

  // ✅ SEO: JSON-LD Structured Data for FAQ
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);

  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Frequently Asked Questions
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-4" data-aos="fade-up">
        <ul>
          {faqs.slice(0, showAll ? faqs.length : 5).map((faq, idx) => (
            <li key={idx} className="mb-4" data-aos="fade-up">
              <div className="flex justify-between items-center">
                {/* ✅ More visible & semantic question */}
                <h2 className="font-semibold text-lg text-gray-600">
                  {faq.question}
                </h2>
                <button
                  onClick={() => toggleVisibility(idx)}
                  aria-expanded={visibleFaqs[idx]}
                  aria-controls={`faq-answer-${idx}`}
                  className="text-xl text-gray-700 hover:text-black transition"
                >
                  {visibleFaqs[idx] ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              {visibleFaqs[idx] && (
                <p
                  id={`faq-answer-${idx}`}
                  className="ml-6 mt-2 text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={toggleShowMore}
          className="mt-4 text-white carousel-button py-2 px-4 rounded"
          data-aos="fade-up"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default FaqList;
