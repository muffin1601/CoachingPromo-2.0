import React from "react";
import { subcategoryContent } from "../../data/subcategoryContent";
import "./SubcategoryStaticContent.css";

const SubcategoryStaticContent = ({ subSlug }) => {
  const html = subcategoryContent[subSlug];

  if (!html) return null;

  return (
    <div
      className="subcategory-html-wrapper"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default SubcategoryStaticContent;
