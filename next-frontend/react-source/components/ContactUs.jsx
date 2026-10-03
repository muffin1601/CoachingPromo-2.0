import React, { useState } from "react";
import "../styles/ContactUs.css";
import { ArrowRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  companyname: "",
  location: "",
  message: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("/api/crm", formData, {
        headers: { "Content-Type": "application/json", "x-api-key": "" },
      });
      await axios.post(`${process.env.NEXT_PUBLIC_API_PATH || "/api"}/send-email`, formData);
      toast.success("Thank you! Our team will be in touch with you shortly.");
      setFormData(emptyForm);
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-layout" id="contact-enquiry" aria-labelledby="contact-form-title">
      <div className="contact-details-column">
        <div className="contact-section-heading">
          <p className="contact-eyebrow">Talk to our team</p>
          <h2>Choose the easiest way to reach us.</h2>
          <p>For faster estimates, keep your approximate quantity, preferred product and delivery city ready.</p>
        </div>

        <div className="contact-methods">
          <a className="contact-method" href="tel:+918750708222">
            <span className="contact-method-icon"><Phone size={20} aria-hidden="true" /></span>
            <span><small>Call our sales desk</small><strong>+91 87507 08222</strong></span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="contact-method" href="mailto:sales@coachingpromo.in">
            <span className="contact-method-icon"><Mail size={20} aria-hidden="true" /></span>
            <span><small>Email your requirement</small><strong>sales@coachingpromo.in</strong></span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="contact-method" href="https://wa.me/918750708222" target="_blank" rel="noopener noreferrer">
            <span className="contact-method-icon"><MessageCircle size={20} aria-hidden="true" /></span>
            <span><small>Chat on WhatsApp</small><strong>Start a conversation</strong></span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="contact-office-card">
          <div><MapPin size={19} aria-hidden="true" /><span><small>New Delhi office</small>F-90/1, beside ESIC Hospital, Okhla Industrial Area Phase 1, New Delhi – 110020</span></div>
          <div><Clock3 size={19} aria-hidden="true" /><span><small>Business hours</small>Monday to Saturday, 10:00 AM – 6:30 PM</span></div>
        </div>
      </div>

      <div className="contact-form-panel">
        <div className="contact-form-heading">
          <p className="contact-form-index">01 / ENQUIRY FORM</p>
          <h2 id="contact-form-title">Tell us about your requirement.</h2>
          <p>Fields marked with an asterisk are required.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <label>
              <span>Full name *</span>
              <input name="name" type="text" autoComplete="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              <span>Institute / company</span>
              <input name="companyname" type="text" autoComplete="organization" placeholder="Organisation name" value={formData.companyname} onChange={handleChange} />
            </label>
            <label>
              <span>Email address *</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@institute.com" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              <span>Phone number *</span>
              <input name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" title="Phone number must be 10 digits" />
            </label>
          </div>

          <label>
            <span>Delivery city / location *</span>
            <input name="location" type="text" autoComplete="address-level2" placeholder="City or delivery location" value={formData.location} onChange={handleChange} required />
          </label>

          <label>
            <span>What do you need?</span>
            <textarea name="message" placeholder="Product, quantity, branding, budget or required delivery date" value={formData.message} onChange={handleChange} rows={5} />
          </label>

          <div className="contact-form-footer">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Request a callback"} <ArrowRight size={17} aria-hidden="true" />
            </button>
            <p>We only use your details to respond to this enquiry.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
