import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import "../styles/PreviewModal.css";
import { X, Download, Eye } from "lucide-react";
import jsPDF from "jspdf";

const PreviewModalPNG = ({ isOpen, onClose, viewStates }) => {
  const canvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    canvasRefs.current.forEach((ref, index) => {
      const canvasEl = ref.current;
      const state = viewStates[index];
      if (!canvasEl || !state) return;

      const canvas = new fabric.StaticCanvas(canvasEl, { width: 300, height: 300 });

      canvas.loadFromJSON(state, () => {
        if (state.backgroundImageUrl) {
          fabric.Image.fromURL(state.backgroundImageUrl, (img) => {
            img.scaleToWidth(300);
            canvas.setBackgroundImage(img, () => canvas.renderAll());
          });
        } else {
          canvas.renderAll();
        }
      });
    });
  }, [isOpen, viewStates]);

  if (!isOpen) return null;

  const labels = ["Front", "Back", "Left", "Right"];

  return (
    <div className="preview-overlay">
      <div className="preview-modal">

        <button className="preview-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 className="preview-title">
          <Eye /> Preview
        </h2>

        <div className="preview-grid">
          {canvasRefs.current.map((ref, i) => (
            <div key={i} className="preview-card">
              <canvas ref={ref} width={200} height={200} />
              <p className="preview-label">{labels[i]}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PreviewModalPNG;
