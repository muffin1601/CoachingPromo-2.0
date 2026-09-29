import { ChevronRight } from "lucide-react";
import { Link } from "@/lib/react-router";

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
                  decoding="async"
                  itemProp="image"
                  width={300}
                  height={300}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
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



import "./SubcategoryGrid.jsx.css";
