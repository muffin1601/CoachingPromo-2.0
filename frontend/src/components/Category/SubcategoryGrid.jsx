import { ChevronRight } from "lucide-react";

const SubcategoryGrid = ({ subcategories ,catSlug}) => {
  console.log("catSlug =>", catSlug);

  return (
    <div className="subcat-list-container">
      <div className="subcat-list-grid">
        {subcategories.map((sub) => (
          <a
            key={sub.slug}
            href={`/${catSlug}/${sub.slug}`}
            className="subcat-card"
          >
            <img
              src={sub.image}
              alt={sub.name}
              className="subcat-card-media"
            />

            <h3 className="subcat-card-title">{sub.name}</h3>

            <span className="subcat-readmore-link">
              View Products <ChevronRight size={18} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryGrid;

const css = `

:root {
  --brand-blue: #0b4a8d;
  --brand-orange: #d17504;
  --neutral-gray: #555;
  --light-border: #e4e4e4;
  --light-bg: #fafafa;
}

/* CONTAINER */
.subcat-list-container {
  
  max-width: 80%;
  margin: 50px auto;
}

/* GRID */
.subcat-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 25px;
}

/* CARD */
.subcat-card {
  background: #fff7efff;
  border: 1px solid var(--light-border);
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
}

.subcat-card:hover {
  box-shadow: 0 10px 25px #0000001a;
}

/* MEDIA */
.subcat-card-media {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* TITLE */
.subcat-card-title {
  font-size: 19px;
  font-weight: 600;
  color: #222;
  line-height: 1.4;
  padding: 16px 18px 6px 18px;
}

/* READ MORE */
.subcat-readmore-link {
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: var(--brand-orange);
  margin: 10px 18px 18px;
  transition: 0.3s ease;
}

.subcat-readmore-link:hover {
  color: var(--brand-blue);
}

`;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);
