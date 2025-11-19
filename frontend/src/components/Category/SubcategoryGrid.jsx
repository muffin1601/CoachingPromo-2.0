import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SubcategoryGrid = ({ subcategories, catSlug }) => {
  return (
    <section className="subcat-list-container">
      {/* SEO Heading */}
      
      <div className="subcat-list-grid">
        {subcategories.map((sub) => (
          <article
            key={sub.slug}
            className="subcat-card"
            itemScope
            itemType="https://schema.org/CollectionPage"
          >
            <Link
              to={`/${catSlug}/${sub.slug}`}
              className="subcat-card-link"
              aria-label={`View ${sub.name} products`}
            >
              {/* Image */}
              <figure className="subcat-card-media-wrapper">
                <img
                  src={sub.image}
                  alt={`Customized ${sub.name} for institutes`}
                  className="subcat-card-media"
                  loading="lazy"
                  itemProp="image"
                />
              </figure>

              {/* Subcategory Title */}
              <h3 className="subcat-card-title" itemProp="name">
                {sub.name}
              </h3>

              {/* Short keyword-rich intro */}
              <p className="subcat-card-caption">
                Explore premium custom {sub.name.toLowerCase()} designed for 
                branding, events, onboarding kits, and promotional needs.
              </p>

              {/* CTA */}
              <span className="subcat-readmore-link">
                View Products <ChevronRight size={18} />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SubcategoryGrid;

const css = `

/* ======================================
   VARIABLES
====================================== */
:root {
  --brand-blue: #0b4a8d;
  --brand-orange: #d17504;
  --brand-orange-dark: #b26203;
  --neutral-gray: #555;
  --text-dark: #222;
  --light-border: #e4e4e4;
  --light-bg: #fffaf4;
  --hover-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  --transition: 0.28s ease;
}
  /* REMOVE BLUE UNDERLINE FROM ALL LINKS */
.subcat-card-link,
.subcat-card-link:link,
.subcat-card-link:visited,
.subcat-card-link:hover,
.subcat-card-link:active {
  text-decoration: none !important;
  color: inherit !important;
  
}


/* ======================================
   CONTAINER
====================================== */
.subcat-list-container {
  max-width: 80%;
  margin: 60px auto;
  animation: fadeIn 0.8s ease forwards;
}

/* HEADING */
.subcat-heading {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: var(--text-dark);
  margin-bottom: 10px;
}

/* DESCRIPTION */
.subcat-description {
  font-size: 16px;
  color: var(--neutral-gray);
  max-width: 760px;
  text-align: center;
  margin: 0 auto 40px;
  line-height: 1.6;
}

/* ======================================
   GRID
====================================== */
.subcat-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 26px;
}

/* ======================================
   CARD
====================================== */
.subcat-card {
  background: var(--light-bg);
  border: 1px solid var(--light-border);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.subcat-card:hover {
  box-shadow: var(--hover-shadow);
  transform: translateY(-4px);
}

/* ======================================
   IMAGE
====================================== */
.subcat-card-media-wrapper {
  width: 100%;
  height:  auto;
  overflow: hidden;
}

.subcat-card-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.subcat-card:hover .subcat-card-media {
  transform: scale(1.05);
}

/* ======================================
   TITLE
====================================== */
.subcat-card-title {
  font-size: 19px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text-dark);
  padding: 14px 18px 4px;
}

/* ======================================
   CAPTION
====================================== */
.subcat-card-caption {
  font-size: 14.5px;
  color: var(--neutral-gray);
  text-decoration: none;
  padding: 0 18px 12px;
  line-height: 1.6;
}

/* ======================================
   CTA BUTTON
====================================== */
.subcat-readmore-link {
  font-size: 15px;
  font-weight: 600;
  color: var(--brand-orange);
  margin: 12px 18px 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: var(--transition);
}

.subcat-readmore-link:hover {
  color: var(--brand-orange-dark);
  transform: translateX(3px);
}

/* ======================================
   RESPONSIVE — TABLETS
====================================== */
@media (max-width: 900px) {
  .subcat-card-media-wrapper {
    height: 190px;
  }

  .subcat-card-title {
    font-size: 17px;
  }

  .subcat-description {
    font-size: 15px;
    margin-bottom: 30px;
  }
}

/* ======================================
   RESPONSIVE — MOBILE (2 columns)
====================================== */
@media (max-width: 600px) {
  .subcat-list-container {
    max-width: 92%;
    margin: 25px auto;
  }

  .subcat-list-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .subcat-card-media-wrapper {
    height: 150px;
  }

  .subcat-card-title {
    font-size: 15px;
  }
}

/* ======================================
   RESPONSIVE — EXTRA SMALL
====================================== */
@media (max-width: 400px) {
  .subcat-list-grid {
    gap: 12px;
  }

  .subcat-card-media-wrapper {
    height: 135px;
  }

  .subcat-card-title {
    font-size: 14px;
  }
}

/* ======================================
   FADE-IN ANIMATION
====================================== */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

`;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);
