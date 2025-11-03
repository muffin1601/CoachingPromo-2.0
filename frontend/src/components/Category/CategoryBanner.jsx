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
                  <span className="cat-banner-divider">/</span>
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
  --cat-banner-subtle: #f1f1f1;
  --cat-banner-font-lg: 42px;
  --cat-banner-font-md: 28px;
}

/* MAIN WRAPPER */
.cat-banner-wrapper {
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

/* DARK OVERLAY */
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
  z-index: 2;
}

/* TITLE */
.cat-banner-title {
  font-size: var(--cat-banner-font-lg);
  font-weight: 700;
  margin: 0 0 10px;
}

/* SUBTITLE */
.cat-banner-subtitle {
  font-size: 18px;
  font-weight: 400;
  color: var(--cat-banner-subtle);
  margin-bottom: 10px;
}

/* BREADCRUMBS */
.cat-banner-breadcrumbs {
  display: inline-flex;
  align-items: center;
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

.cat-banner-divider {
  opacity: 0.6;
}

/* RESPONSIVE */
@media (max-width: 640px) {
  .cat-banner-wrapper {
    height: 220px;
  }

  .cat-banner-title {
    font-size: var(--cat-banner-font-md);
  }

  .cat-banner-subtitle {
    font-size: 15px;
  }
}
`;

// Inject the CSS into the document head    
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);