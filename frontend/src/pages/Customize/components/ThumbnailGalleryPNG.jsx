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
    { label: "Front View", icon: <Shirt size={18} className="tg-icon" /> },
    { label: "Back View", icon: <RotateCcw size={18} className="tg-icon" /> },
    { label: "Left View", icon: <ArrowLeftCircle size={18} className="tg-icon" /> },
    { label: "Right View", icon: <ArrowRightCircle size={18} className="tg-icon" /> },
  ];

  return (
    <div className="tg-container">
      <div className="tg-buttons">
        {sideLabels.map((item, index) => (
          <button
            key={index}
            className={`tg-btn ${index === activeIndex ? "tg-active" : ""}`}
            onClick={() => onThumbnailClick(index)}
          >
 
            {/* <canvas
              ref={thumbnailCanvasRefs.current[index]}
              width={70}
              height={70}
              className="tg-thumb-canvas"
            /> */}

            
              {item.icon}
              {item.label}         
            
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailGalleryPNG;
