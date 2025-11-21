import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { fabric } from "fabric";
import { useLocation } from "react-router-dom";
import "./styles/CustomizerSVG.css";

/* ⭐ Lazy Load Heavy Components */
const CanvasToolbar = lazy(() => import("./components/CanvasToolbar"));
const ThumbnailGalleryPNG = lazy(() =>
  import("./components/ThumbnailGalleryPNG")
);
const VerticalToolbarPNG = lazy(() =>
  import("./components/VerticalToolbarPNG")
);
const UploadControlsPNG = lazy(() =>
  import("./components/UploadControlsPNG")
);
const TextControlsPNG = lazy(() => import("./components/TextControlsPNG"));
const ExportButtons = lazy(() => import("./components/ExportButtons"));
const ProductCustomizerPNG = lazy(() =>
  import("./components/ProductCustomizerPNG")
);
const PreviewModalPNG = lazy(() =>
  import("./components/PreviewModalPNG")
);

const CustomizeAll = () => {
  const canvasRef = useRef(null);

  const thumbnailCanvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ]);

  const location = useLocation();
  const {
    productImages = [],
    productName = "",
    subcategory = ""
  } = location.state || {};

  const [viewStates, setViewStates] = useState([null, null, null, null]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTool, setActiveTool] = useState("upload");
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  /* ---------------- Force export-only mode for some subcategories ---------------- */
  useEffect(() => {
    const forced = ["aprons", "corporate shirts", "winter wear"];
    if (forced.includes(subcategory.toLowerCase())) {
      setActiveTool("export");
    }
  }, [subcategory]);

  /* ---------------- Save current canvas state ---------------- */
  const saveCurrentViewState = () => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;

    const json = canvas.toJSON(["id"]);

    if (canvas.backgroundImage?.getSrc) {
      json.backgroundImageUrl = canvas.backgroundImage.getSrc();
    }

    setViewStates((prev) => {
      const copy = [...prev];
      copy[activeIndex] = json;
      return copy;
    });
  };

  /* ---------------- Debounced Thumbnail Update ---------------- */
  const thumbUpdateRef = useRef(null);

  const updateThumbnail = (index) => {
    clearTimeout(thumbUpdateRef.current);
    thumbUpdateRef.current = setTimeout(() => {
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
          top: (dst.height - img.height * scale) / 2
        });

        thumbCanvas.clear();
        thumbCanvas.add(img);
        thumbCanvas.renderAll();
      });
    }, 150);
  };

  /* ---------------- Undo Logic ---------------- */
  const handleUndo = () => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas || undoStack.length === 0) return;

    const prev = undoStack.pop();
    const current = canvas.toJSON(["id"]);
    setRedoStack((r) => [...r, current]);

    canvas.loadFromJSON(prev, () => {
      canvas.renderAll();
      updateThumbnail(activeIndex);
    });

    setUndoStack([...undoStack]);
  };

  /* ---------------- Redo Logic ---------------- */
  const handleRedo = () => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas || redoStack.length === 0) return;

    const next = redoStack.pop();
    const current = canvas.toJSON(["id"]);
    setUndoStack((u) => [...u, current]);

    canvas.loadFromJSON(next, () => {
      canvas.renderAll();
      updateThumbnail(activeIndex);
    });

    setRedoStack([...redoStack]);
  };

  /* ---------------- Switch view (front/back/side) ---------------- */
  const handleThumbnailClick = (index) => {
    if (index === activeIndex) return;

    saveCurrentViewState();
    setActiveIndex(index);

    const canvas = canvasRef.current?.fabricCanvas;
    if (canvas && viewStates[index]) {
      canvas.loadFromJSON(viewStates[index], () => {
        canvas.renderAll();
      });
    }
  };

  /* ---------------- Switch tools ---------------- */
  const handleToolChange = (tool) => {
    saveCurrentViewState();
    setActiveTool(tool);
  };

  /* ---------------- Preview Mode ---------------- */
  useEffect(() => {
    if (activeTool === "preview") {
      saveCurrentViewState();
      setIsPreviewOpen(true);
    } else {
      setIsPreviewOpen(false);
    }
  }, [activeTool]);

  return (
    <div className="customizer-page">
      {/* HEADER */}
      <div className="customizer-header">
        <h2>{productName}</h2>
        <div className="header-actions">
          <button
            className="preview-btn"
            onClick={() => setActiveTool("preview")}
          >
            Preview
          </button>
        </div>
      </div>

      {/* TOP TOOLBAR + THUMBNAILS */}
      <div className="top-tools-bar">
        <Suspense fallback={<div />}>
          <CanvasToolbar
            canvasRef={canvasRef}
            onUndo={handleUndo}
            onRedo={handleRedo}
          />
        </Suspense>

        <div className="thumbnail-bar">
          <Suspense fallback={<div />}>
            <ThumbnailGalleryPNG
              activeIndex={activeIndex}
              thumbnailCanvasRefs={thumbnailCanvasRefs}
              onThumbnailClick={handleThumbnailClick}
              productImages={productImages}
            />
          </Suspense>
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="customizer-body">
        {/* LEFT TOOLBAR */}
        <aside className="left-toolbar">
          <Suspense fallback={<div />}>
            <VerticalToolbarPNG
              onSelectTool={handleToolChange}
              activeTool={activeTool}
            />
          </Suspense>
        </aside>

        {/* RIGHT SIDEBAR */}
        <aside className="right-sidebar">
          <Suspense fallback={<div />}>
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
          </Suspense>
        </aside>

        {/* MAIN CANVAS AREA */}
        <main className="canvas-area">
          <div className="canvas-container">
            <Suspense fallback={<div className="loader"></div>}>
              <ProductCustomizerPNG
                canvasRef={canvasRef}
                mainImageUrl={productImages[activeIndex]}
                savedState={viewStates[activeIndex]}
              />
            </Suspense>
          </div>
        </main>
      </div>

      {/* PREVIEW MODAL */}
      <Suspense fallback={<div></div>}>
        <PreviewModalPNG
          isOpen={isPreviewOpen}
          onClose={() => setActiveTool("upload")}
          viewStates={viewStates}
        />
      </Suspense>
    </div>
  );
};

export default CustomizeAll;
