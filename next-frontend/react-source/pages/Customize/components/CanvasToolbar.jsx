import React from "react";
import "../styles/CanvasToolbar.css";

import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Trash2
} from "lucide-react";

const CanvasToolbar = ({ canvasRef, onUndo, onRedo }) => {
  const zoomIn = () =>
    canvasRef.current.setZoom(canvasRef.current.getZoom() * 1.1);

  const zoomOut = () =>
    canvasRef.current.setZoom(canvasRef.current.getZoom() / 1.1);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    canvas.clear();
    canvas.requestRenderAll && canvas.requestRenderAll();
  };

  return (
    <div className="canvas-toolbar">

      <button
        className="toolbar-btn"
        onClick={zoomIn}
        aria-label="Zoom in canvas"
      >
        <ZoomIn className="toolbar-icon" />
        <span>Zoom In</span>
      </button>

      <button
        className="toolbar-btn"
        onClick={zoomOut}
        aria-label="Zoom out canvas"
      >
        <ZoomOut className="toolbar-icon" />
        <span>Zoom Out</span>
      </button>

      <button
        className="toolbar-btn"
        onClick={onUndo}
        aria-label="Undo last action"
      >
        <RotateCcw className="toolbar-icon" />
        <span>Undo</span>
      </button>

      <button
        className="toolbar-btn"
        onClick={onRedo}
        aria-label="Redo last action"
      >
        <RotateCw className="toolbar-icon" />
        <span>Redo</span>
      </button>

      <button
        className="toolbar-btn danger"
        onClick={clearCanvas}
        aria-label="Clear entire canvas"
      >
        <Trash2 className="toolbar-icon" />
        <span>Clear All</span>
      </button>

    </div>
  );
};

export default CanvasToolbar;
