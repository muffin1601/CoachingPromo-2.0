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

const css = `
:root {
  --cat-banner-overlay: rgba(10, 10, 10, 0.45);
  --cat-banner-text: #fff;
  --cat-banner-subtle: #eaeaea;
  --cat-banner-font-lg: 42px;
  --cat-banner-font-md: 30px;
  --cat-banner-font-sm: 24px;
}

/* MAIN WRAPPER */
.cat-banner-wrapper {
  width: 100%;
  min-height: 320px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;   /* ✅ ensures spacing on all screens */
  margin-top: 80px;
}

/* OVERLAY */
.cat-banner-overlay {
  position: absolute;
  inset: 0;
  background: var(--cat-banner-overlay);
}

/* CONTENT */
.cat-banner-content {
  position: relative;
  text-align: center;
  color: var(--cat-banner-text);
  width: 100%;
  padding: 0 20px;
  max-width: 900px;  /* ✅ prevents over-stretch on large screens */
}

/* TITLE */
.cat-banner-title {
  font-size: var(--cat-banner-font-lg);
  font-weight: 700;
  margin: 0 0 10px;
  line-height: 1.2;
}

/* SUBTITLE */
.cat-banner-subtitle {
  font-size: 18px;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 10px;
}

/* BREADCRUMBS */
.cat-banner-breadcrumbs {
  display: flex;
  flex-wrap: wrap;   /* ✅ prevents overflow */
  justify-content: center;
  gap: 8px;
  font-size: 15px;
}

.cat-banner-crumb a {
  color: var(--cat-banner-text);
  text-decoration: none;
  font-weight: 500;
  transition: 0.25s;
}

.cat-banner-crumb a:hover {
  color: var(--brand-orange);
}

/* ------------------ RESPONSIVE ------------------ */

/* Tablets */
@media (max-width: 900px) {
  .cat-banner-wrapper {
    padding: 50px 20px;
    min-height: 260px;
  }

  .cat-banner-title {
    font-size: var(--cat-banner-font-md);
  }

  .cat-banner-subtitle {
    font-size: 16px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .cat-banner-wrapper {
    padding: 40px 15px;
    min-height: 120px;
  }

  .cat-banner-title {
    font-size: var(--cat-banner-font-sm);
  }

  .cat-banner-subtitle {
    font-size: 14px;
  }

  .cat-banner-breadcrumbs {
    font-size: 13px;
    gap: 4px;
  }
}

/* Extra small screens */
@media (max-width: 400px) {
  .cat-banner-title {
    font-size: 20px;
  }

  .cat-banner-subtitle {
    font-size: 13px;
  }
}

`;

// Inject the CSS into the document head    
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);