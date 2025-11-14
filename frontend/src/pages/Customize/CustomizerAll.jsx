import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { useLocation } from "react-router-dom";


import CanvasToolbar from "./components/CanvasToolbar";
import ThumbnailGalleryPNG from "./components/ThumbnailGalleryPNG";
import VerticalToolbarPNG from "./components/VerticalToolbarPNG";
import UploadControlsPNG from "./components/UploadControlsPNG";
import TextControlsPNG from "./components/TextControlsPNG";
import ExportButtons from "./components/ExportButtons";
import ProductCustomizerPNG from "./components/ProductCustomizerPNG";
import PreviewModalPNG from "./components/PreviewModalPNG";


import "./styles/CustomizerSVG.css";

const CustomizeAll = () => {
  const canvasRef = useRef(null);

  const thumbnailCanvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const location = useLocation();
  const {
    productImages = [],
    productName = "",
    subcategory = "",
  } = location.state || {};

  const [viewStates, setViewStates] = useState([null, null, null, null]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTool, setActiveTool] = useState("upload");
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  /* ---------------- Force export-only categories ---------------- */
  useEffect(() => {
    const forced = ["Aprons", "Corporate Shirts", "Winter Wear"];
    if (forced.map(x => x.toLowerCase()).includes(subcategory.toLowerCase())) {
      setActiveTool("export");
    }
  }, [subcategory]);

  /* ---------------- Save canvas state ---------------- */
  const saveCurrentViewState = () => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;

    const json = canvas.toJSON(["id"]);

    if (canvas.backgroundImage?.getSrc) {
      json.backgroundImageUrl = canvas.backgroundImage.getSrc();
    }

    const updated = [...viewStates];
    updated[activeIndex] = json;
    setViewStates(updated);
  };

  /* ---------------- Update thumbnail image ---------------- */
  const updateThumbnail = (index) => {
    const srcCanvas = canvasRef.current?.fabricCanvas;
    const dst = thumbnailCanvasRefs.current[index]?.current;
    if (!srcCanvas || !dst) return;

    const thumbCanvas = new fabric.StaticCanvas(dst);
    const dataUrl = srcCanvas.toDataURL({ format: "png" });

    fabric.Image.fromURL(dataUrl, (img) => {
      const scale = Math.min(dst.width / img.width, dst.height / img.height);

      img.scale(scale);
      img.set({
        left: (dst.width - img.width * scale) / 2,
        top: (dst.height - img.height * scale) / 2,
      });

      thumbCanvas.clear();
      thumbCanvas.add(img);
      thumbCanvas.renderAll();
    });
  };

  /* ---------------- Undo Logic ---------------- */
  const handleUndo = () => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas || undoStack.length === 0) return;

    const prevState = undoStack.pop();
    const currState = canvas.toJSON(["id"]);
    setRedoStack((p) => [...p, currState]);

    canvas.loadFromJSON(prevState, () => {
      canvas.renderAll();
      updateThumbnail(activeIndex);
    });

    setUndoStack([...undoStack]);
  };

  /* ---------------- Redo Logic ---------------- */
  const handleRedo = () => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas || redoStack.length === 0) return;

    const nextState = redoStack.pop();
    const currState = canvas.toJSON(["id"]);
    setUndoStack((p) => [...p, currState]);

    canvas.loadFromJSON(nextState, () => {
      canvas.renderAll();
      updateThumbnail(activeIndex);
    });

    setRedoStack([...redoStack]);
  };

  /* ---------------- Change View ---------------- */
  const handleThumbnailClick = (index) => {
    if (index === activeIndex) return;

    saveCurrentViewState();
    setActiveIndex(index);

    const canvas = canvasRef.current?.fabricCanvas;
    if (canvas && viewStates[index]) {
      canvas.loadFromJSON(viewStates[index], () => canvas.renderAll());
    }
  };

  /* ---------------- Tool Change ---------------- */
  const handleToolChange = (tool) => {
    saveCurrentViewState();
    setActiveTool(tool);
  };

  /* ---------------- Preview ---------------- */
  useEffect(() => {
    if (activeTool === "preview") {
      saveCurrentViewState();
      setIsPreviewOpen(true);
    } else {
      setIsPreviewOpen(false);
    }
  }, [activeTool]);

  /* ---------------- Update thumbnails after preview ---------------- */
  useEffect(() => {
    if (!isPreviewOpen) return;

    setTimeout(() => {
      [...Array(4).keys()].forEach(updateThumbnail);
    }, 300);
  }, [isPreviewOpen]);

  return (
    <div className="customizer-page">

      {/* HEADER SAME AS SVG */}
      <div className="customizer-header">
        <h2>{productName}</h2>

        <div className="header-actions">
          <button className="preview-btn" onClick={() => setActiveTool("preview")}>
            Preview
          </button>
        </div>
      </div>

      {/* TOP TOOLBAR + THUMBNAILS */}
      <div className="top-tools-bar">
        <CanvasToolbar
          canvasRef={canvasRef}
          onUndo={handleUndo}
          onRedo={handleRedo}
        />

        <div className="thumbnail-bar">
          <ThumbnailGalleryPNG
            activeIndex={activeIndex}
            thumbnailCanvasRefs={thumbnailCanvasRefs}
            onThumbnailClick={handleThumbnailClick}
            productImages={productImages}
          />
        </div>
      </div>

      {/* MAIN BODY (SVG Layout Style) */}
      <div className="customizer-body">

        {/* LEFT TOOLBAR */}
        <aside className="left-toolbar">
          <VerticalToolbarPNG
            onSelectTool={handleToolChange}
            activeTool={activeTool}
          />
        </aside>

        {/* RIGHT SIDEBAR CONTROLS */}
        <aside className="right-sidebar">
          {activeTool === "upload" && (
            <UploadControlsPNG
              canvasRef={canvasRef}
              updateThumbnail={() => updateThumbnail(activeIndex)}
              saveCurrentViewState={saveCurrentViewState}
              activeIndex={activeIndex}
            />
          )}

          {activeTool === "text" && (
            <TextControlsPNG
              canvasRef={canvasRef}
              updateThumbnail={() => updateThumbnail(activeIndex)}
              saveCurrentViewState={saveCurrentViewState}
              activeIndex={activeIndex}
            />
          )}

          {activeTool === "export" && (
            <ExportButtons
              canvasRef={canvasRef}
              viewStates={viewStates}
              onOpenPreview={() => setActiveTool("preview")}
            />
          )}
        </aside>

        {/* MAIN CANVAS AREA */}
        <main className="canvas-area">
          <div className="canvas-container">
            <ProductCustomizerPNG
              canvasRef={canvasRef}
              mainImageUrl={productImages[activeIndex]}
              savedState={viewStates[activeIndex]}
            />
          </div>
        </main>
      </div>

      {/* PREVIEW MODAL */}
      <PreviewModalPNG
        isOpen={isPreviewOpen}
        onClose={() => setActiveTool("upload")}
        viewStates={viewStates}
      />

    </div>
  );
};

export default CustomizeAll;
