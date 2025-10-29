import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

const stateCityList = [
  { state: "Andhra Pradesh", cities: ["Vijayavada", "Vishakhapatnam"] },
  { state: "Assam", cities: ["Guwahati"] },
  { state: "Bihar", cities: ["Muzaffarpur", "Patna", "Supaul"] },
  { state: "Chandigarh", cities: ["Chandigarh"] },
  { state: "Chhattisgarh", cities: ["Bilaspur", "Raipur"] },
  { state: "Delhi", cities: ["Dalupura", "Delhi", "Najafgarh", "New Delhi", "Nangloi Jat", "Sultanpur Mazra", "Bhalswa Jahangirpur"] },
  { state: "Gujarat", cities: ["Ahmedabad", "Rajkot", "Surat", "Vadodara"] },
  { state: "Haryana", cities: ["Faridabad"] },
  { state: "Himachal Pradesh", cities: ["Shimla"] },
  { state: "Jharkhand", cities: ["Dhanbad", "Jamshedpur", "Ranchi"] },
  { state: "Karnataka", cities: ["Abbigeri", "Bangalore", "Byatarayanpur", "Dasarhalli", "Yelahanka"] },
  { state: "Madhya Pradesh", cities: ["Bhopal", "Gwalior", "Indore", "Jabalpur"] },
  { state: "Odisha", cities: ["Balasore", "Puri"] },
  { state: "Punjab", cities: ["Amritsar", "Ludhiana"] },
  { state: "Puducherry", cities: ["Puducherry"] },
  { state: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Kota"] },
  { state: "Tamil Nadu", cities: ["Ambattur", "Chennai", "Madurai", "Madhavaram", "Oulgaret", "Pallavaram", "Tiruvottiyur"] },
  { state: "Telangana", cities: ["Hyderabad", "Kukatpalli", "Secunderabad"] },
  { state: "Maharashtra", cities: ["Aurangabad", "Bhayandar", "Kalyan", "Mumbai", "Nagpur", "Nasik", "Pimpri-Chinchwad", "Pune", "Thane", "Vasai-Virar"] },
  { state: "West Bengal", cities: ["Barakpur", "Bansbaria", "Bhatpara", "Chandannagar", "Dam Dam", "Haora", "Krishnanagar", "Salt Lake City", "Shrirampur", "Titagarh", "Kolkata"] },
  { state: "Uttarakhand", cities: ["Haldwani"] },
  { state: "Jammu and Kashmir", cities: ["Srinagar"] },
  { state: "Uttar Pradesh", cities: ["Agra", "Aligarh", "Ghaziabad", "Kanpur", "Lucknow", "Meerut", "Mirzapur", "Murtazabad", "Prayagraj", "Varanasi"] },
];

function splitStatesIntoColumns(states, n) {
  const columns = Array.from({ length: n }, () => []);
  states.forEach((item, index) => {
    columns[index % n].push(item);
  });
  return columns;
}

const Footer = () => {
  const columns = splitStatesIntoColumns(stateCityList, 5);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="our-services">
          <p className="footer-text-1"><MdLocationCity /> Supply Cities in India:</p>
          <div className="services-columns">
            {columns.map((group, colIndex) => (
              <ul key={colIndex}>
                {group.map(({ state, cities }, stateIndex) => (
                  <li key={stateIndex}>
                    <strong>{state}</strong>
                    <ul>
                      {cities.map((city, idx) => (
                        <li key={idx}>{city}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="footer-extra-content">
            <p>
              CoachingPromo is one of India’s trusted providers of customized promotional items for coaching institutes, schools, colleges, institutes, and businesses. We offer bulk branding solutions like promotional t-shirts, custom diaries, logo-printed bags, stationery kits, pens, and other corporate gifting products — tailored to suit your brand’s identity.<br /><br />
              Our services are available across major Indian cities including Delhi, Mumbai, Bengaluru, Hyderabad, Ahmedabad, Pune, Jaipur, Surat, Bhopal, Indore, Lucknow, Chandigarh, Ranchi, Guwahati, and Nagpur. Whether for student giveaways or corporate promotions, CoachingPromo helps you create memorable branding through high-quality, personalized gifts.
            </p>
          </div>
        </div>

        <div className="social-media">
          <p className="footer-text">Follow us on social media</p>
          <div className="icons">
            <a
              href="https://www.facebook.com/profile.php?id=61578398193650"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/mycoaching-promo-a0b4ba380/"
              aria-label="Visit our LinkedIn page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/coachingpromo.in/"
              aria-label="Visit our Instagram page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="contact-info">
          <p className="footer-text">
            Email: <a href="mailto:sales@coachingpromo.in">sales@coachingpromo.in</a>
          </p>
          <p className="footer-text">
            Phone: <a href="tel:+918750708222">+91 8750 708222</a>
          </p>
        </div>

        <div className="quick-links">
          <p className="footer-text">Quick Links:</p>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">&copy; {new Date().getFullYear()} Coaching Promo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
