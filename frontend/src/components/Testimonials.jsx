import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  StarHalf,
} from "lucide-react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Basu Classes",
    role: "Coaching Institute",
    review:
      "We are extremely pleased with the services provided by MF Global Services. Their team has demonstrated great expertise in delivering high-quality educational promotional products such as T-shirts, Bags, ID Cards, and customized items. Quality, design & timely delivery always exceeded expectations. Highly professional team!",
    rating: 5,
  },
  {
    name: "Photon Classes",
    role: "Coaching Institute",
    review:
      "Their team is highly professional and experienced in delivering top-quality promotional products such as T-shirts, hoodies, bags, and ID cards. Product quality, branding precision & timely delivery exceeded expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Chemistry Solutions",
    role: "Institution",
    review:
      "Great experience working with MF Global Services. From custom T-shirts, hoodies, bags, and ID cards, everything was timely and excellent quality. Creative designs, durable materials & smooth service. Highly recommended!",
    rating: 5,
  },
];

// rating → generate stars
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="star-icon" />
      ))}
      {halfStar && <StarHalf className="star-icon" />}
    </>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <p className="testimonial-tag">TESTIMONIALS</p>
      <h2 className="testimonial-title">What Our Customers Say</h2>

      <div className="testimonial-wrapper">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="star-row">{renderStars(t.rating)}</div>

            <h3>{t.name}</h3>
            <span className="role">{t.role}</span>

            <Quote className="quote-icon" />
            <p className="review">{t.review}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-nav">
        <button className="testimonial-nav-1"><ChevronLeft /></button>
        <button className="testimonial-nav-1"><ChevronRight /></button>
      </div>
    </section>
  );
};

export default Testimonials;
