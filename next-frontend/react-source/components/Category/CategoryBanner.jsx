import React from "react";

const CategoryBanner = ({ name, image, subtitle, breadcrumbs = [] }) => {
  return (
    <div
      className="cat-banner-wrapper"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="cat-banner-overlay"></div>

      <div className="cat-banner-content">
        <h1 className="cat-banner-title">{name}</h1>

        {subtitle && <p className="cat-banner-subtitle">{subtitle}</p>}

        {breadcrumbs.length > 0 && (
          <div className="cat-banner-breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="cat-banner-crumb">
                {crumb.href ? (
                  <a href={crumb.href}>{crumb.label}</a>
                ) : (
                  <span>{crumb.label}</span>
                )}

                {index !== breadcrumbs.length - 1 && (
                  <span className="cat-banner-divider">  /</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryBanner;



// Inject the CSS into the document head    
import "./CategoryBanner.jsx.css";