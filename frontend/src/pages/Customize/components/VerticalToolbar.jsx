import React from "react";
import "../styles/VerticalToolbar.css";
import {
  FaUpload,
  FaFont,
  FaPalette,
  FaUserEdit,
  FaSave,
  FaEye
} from "react-icons/fa";

const VerticalToolbar = ({ onSelectTool, activeTool, flag, subcategory, productType }) => {

  const allowedSaveCategories = ["Aprons", "Winter Wear", "Corporate Shirts"];
  const allowedProductTypes = ["polotshirt", "roundneck"];

  const tools = [
    { id: "upload", icon: <FaUpload />, label: "Upload" },
    { id: "text", icon: <FaFont />, label: "Text" },
    { id: "color", icon: <FaPalette />, label: "Color" },
    { id: "name", icon: <FaUserEdit />, label: "Name" },
    { id: "export", icon: <FaSave />, label: "Save" },
    { id: "preview", icon: <FaEye />, label: "Preview" },
  ];

  // If flag is false → hide color, name, preview
  let visibleTools = flag
    ? tools
    : tools.filter(tool => !["color", "name", "preview"].includes(tool.id));

  const canSaveByCategory = allowedSaveCategories.some(
    cat => cat.toLowerCase() === (subcategory || "").toLowerCase()
  );

  const canSaveByType = allowedProductTypes.some(
    type => type.toLowerCase() === (productType || "").toLowerCase()
  );

  if (!canSaveByCategory && !canSaveByType) {
    visibleTools = visibleTools.filter(tool => tool.id !== "export");
  }

  return (
    <div className="vt-container">
      {visibleTools.map(({ id, icon, label }) => (
        <button
          key={id}
          className={`vt-btn ${activeTool === id ? "vt-active" : ""}`}
          onClick={() => onSelectTool(id)}
        >
          <span className="vt-icon">{icon}</span>
          <span className="vt-label">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default VerticalToolbar;
