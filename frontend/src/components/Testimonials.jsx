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
    name: "Delhi Public School",
    role: "School",
    review:
      "Great quality T-shirts for our Annual Event. Smooth service & on-time delivery!",
    rating: 5,
  },
  {
    name: "Allen Institute",
    role: "Coaching",
    review:
      "Bulk polo T-shirts customized with logo. Excellent printing & fabric.",
    rating: 5,
  },
  {
    name: "Resonance",
    role: "Institute",
    review:
      "Fast delivery, great support. Students loved the designs.",
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
