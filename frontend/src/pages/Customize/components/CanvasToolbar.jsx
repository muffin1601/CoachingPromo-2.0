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
      <button className="toolbar-btn" onClick={zoomIn}>
        <ZoomIn className="toolbar-icon" />
        <span>Zoom In</span>
      </button>

      <button className="toolbar-btn" onClick={zoomOut}>
        <ZoomOut className="toolbar-icon" />
        <span>Zoom Out</span>
      </button>

      <button className="toolbar-btn" onClick={onUndo}>
        <RotateCcw className="toolbar-icon" />
        <span>Undo</span>
      </button>

      <button className="toolbar-btn" onClick={onRedo}>
        <RotateCw className="toolbar-icon" />
        <span>Redo</span>
      </button>

      <button className="toolbar-btn danger" onClick={clearCanvas}>
        <Trash2 className="toolbar-icon" />
        <span>Clear All</span>
      </button>
    </div>
  );
};

export default CanvasToolbar;
