import React from "react";
import "../styles/ThumbnailGallery.css";
import {
  Shirt,
  RotateCcw,
  ArrowLeftCircle,
  ArrowRightCircle
} from "lucide-react";

const ThumbnailGalleryPNG = ({
  activeIndex,
  onThumbnailClick,
  productImages = [],
  thumbnailCanvasRefs,
}) => {

  const sideLabels = [
    {
      label: "Front View",
      aria: "Switch to front view",
      icon: <Shirt size={18} className="tg-icon" aria-hidden="true" />
    },
    {
      label: "Back View",
      aria: "Switch to back view",
      icon: <RotateCcw size={18} className="tg-icon" aria-hidden="true" />
    },
    {
      label: "Left View",
      aria: "Switch to left view",
      icon: <ArrowLeftCircle size={18} className="tg-icon" aria-hidden="true" />
    },
    {
      label: "Right View",
      aria: "Switch to right view",
      icon: <ArrowRightCircle size={18} className="tg-icon" aria-hidden="true" />
    }
  ];

  return (
    <div className="tg-container">
      <div className="tg-buttons">

        {sideLabels.map((item, index) => (
          <button
            key={index}
            className={`tg-btn ${index === activeIndex ? "tg-active" : ""}`}
            onClick={() => onThumbnailClick(index)}
            aria-label={item.aria}
          >
            {item.icon}
            {item.label}
          </button>
        ))}

      </div>
    </div>
  );
};

export default ThumbnailGalleryPNG;
