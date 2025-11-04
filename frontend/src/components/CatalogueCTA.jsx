import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/CatalogueCTA.css";
import { ArrowRight } from "lucide-react";

const CatalogueCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalogue.pdf";
    link.download = "Coachingpromo-Catalogue.pdf";
    link.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        import.meta.env.VITE_CRM_API_URL,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_CRM_API_KEY,
          },
        }
      );

      await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);

      toast.success("Thanks! Catalogue is downloading now…");

      handleDownload();

      setFormData({
        name: "",
        email: "",
        phone: "",
        companyname: "",
        location: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section  className="catalogue-cta">
      <div className="cta-wrapper">

        {/* Right Form */}
        <div id= "catalogue" className="cta-right">
          <h2 className="cta-title">Download Catalogue</h2>
          <p className="cta-subtitle">
            Fill details and get complete catalogue.
          </p>

          <form onSubmit={handleSubmit} className="cta-form">

            <div className="form-grid">
              {/* <input
                type="text"
                name="companyname"
                placeholder="Company / Institute Name*"
                value={formData.companyname}
                onChange={handleChange}
                required
              /> */}


              {/* <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
              /> */}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="\d{10}"
                title="Phone number must be 10 digits"
              />

              
              <input
                type="text"
                name="location"
                placeholder="City / Location*"
                value={formData.location}
                onChange={handleChange}
                required
              />
           
            </div>

            <button type="submit" className="cta-btn">Download Now <ArrowRight /></button>
          </form>
        </div>
         {/* Left image */}
        <div className="cta-left">
          <img
            src="/assets/catalogue-img.webp"
            alt="Catalogue"
            className="cta-img"
          />
        </div>
      </div>
    </section>
  );
};

export default CatalogueCTA;
