import React from "react";
import "../styles/VerticalToolbar.css";
import { FaUpload, FaFont, FaSave, FaEye } from "react-icons/fa";

const VerticalToolbarPNG = ({ onSelectTool, activeTool }) => {

  const tools = [
    { id: "upload", icon: <FaUpload />, label: "Upload" },
    { id: "text", icon: <FaFont />, label: "Text" },
    // { id: "export", icon: <FaSave />, label: "Save" },
    { id: "preview", icon: <FaEye />, label: "Preview" },
  ];

  return (
    <div className="vt-container">
      {tools.map(({ id, icon, label }) => (
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

export default VerticalToolbarPNG;
