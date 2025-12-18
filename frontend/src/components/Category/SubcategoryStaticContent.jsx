import React from "react";
import { subcategoryContent } from "../../data/subcategoryContent";
import "./SubcategoryStaticContent.css";

const SubcategoryStaticContent = ({ subSlug, productName }) => {
  let html = subcategoryContent[subSlug];

  if (!html || !productName) return null;

  html = html.replaceAll("{{PRODUCT_NAME}}", productName);

  return (
    <div
      className="subcategory-html-wrapper"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default SubcategoryStaticContent;