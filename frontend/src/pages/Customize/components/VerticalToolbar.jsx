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

  /* FULL TOOL LIST (SVG CUSTOMIZER) */
  const tools = [
    { id: "upload", icon: <FaUpload />, label: "Upload" },
    { id: "text",  icon: <FaFont />,  label: "Text" },
    { id: "color", icon: <FaPalette />, label: "Color" },
    { id: "name",  icon: <FaUserEdit />, label: "Name" },
    { id: "export", icon: <FaSave />, label: "Save" },
    { id: "preview", icon: <FaEye />, label: "Preview" },
  ];

  /* SVG PRODUCT TYPES → full features allowed */
  const svgTypes = ["polotshirt", "roundneck"];

  let visibleTools = tools;

  /* --------------------------
      PNG CUSTOMIZER MODE
     -------------------------- */
  if (productType === "png") {
    // Only allow: upload, text, export, preview
    visibleTools = tools.filter(tool =>
      ["upload", "text", "export", "preview"].includes(tool.id)
    );
  }

  /* --------------------------
      SVG MODE — respect 'flag'
     -------------------------- */
  if (productType !== "png") {
    if (!flag) {
      visibleTools = tools.filter(
        tool => !["color", "name", "preview"].includes(tool.id)
      );
    }
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
