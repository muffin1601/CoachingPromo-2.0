import React from "react";
import "../styles/PageBanner.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PageBanner = ({ title, breadcrumb = [], background }) => {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="page-banner-overlay" />

      <div className="page-banner-content">
        <h1>{title}</h1>

        <div className="breadcrumb">
          <Link to="/">Home</Link>
          {breadcrumb.map((item, index) => (
            <span key={index} className="crumb">
              <ChevronRight className="crumb-icon" />
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
