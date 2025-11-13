// CustomizerSVG.js
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fabric } from "fabric";
import CanvasToolbar from "./components/CanvasToolbar";
import ThumbnailGallery from "./components/ThumbnailGallery";
import ProductCustomizer from "./components/ProductCustomizer";
import UploadControls from "./components/UploadControls";
import TextControls from "./components/TextControls";
import ColorPalette from "./components/ColorPalette";
import NameNumberInput from "./components/NameNumberInput";
import ExportButtons from "./components/ExportButtons";
import VerticalToolbar from "./components/VerticalToolbar";
import PreviewModal from "./components/PreviewModal";
import "./styles/CustomizerSVG.css";

/* ---------------- SVG CONFIG ---------------- */
const svgMap = {
  polotshirt: ["/polo/front.svg", "/polo/back.svg", "/polo/left.svg", "/polo/right.svg"],
  roundneck: ["/round/front.svg", "/round/back.svg", "/round/left.svg", "/round/right.svg"],
};

const labelMap = {
  polotshirt: { fullTshirt: "Body", collar: "Collar", sleeves: "Sleeves" },
  roundneck: { fullTshirt: "Body", collar: "Neck Rib", sleeves: "Sleeves" }
};

const partMapSet = {
  polotshirt: {
    collar: ["front-part-7", "front-part-12", "front-part-23", "front-part-50", "front-part-51", "front-part-36", "front-part-14", "front-part-15", "back-part-7", "back-part-12", "back-part-11", "left-part-7", "left-part-13", "left-part-69", "left-part-10", "left-part-11", "right-part-12", "right-part-5", "right-part-50", "right-part-7", "right-part-11"],
    sleeves: ["front-part-5", "front-part-6", "back-part-5", "back-part-4", "right-part-4", "left-part-4"],
    fullTshirt: ["front-part-2", "front-part-8", "front-part-10", "back-part-2", "back-part-6", "left-part-2", "left-part-9", "left-part-12", "left-part-8", "right-part-2", "right-part-9", "right-part-8", "right-part-6"]
  },
  roundneck: {
    fullTshirt: ["front_path_2", "front_path_6", "front_path_8", "back_path_2", "back_path_6", "left_path_6", "left_path_2", "right_path_1", "right_path_6"],
    sleeves: ["front_path_4", "front_path_5", "back_path_4", "back_path_5", "left_path_3", "right_path_3"],
    collar: ["front_path_7", "front_path_10", "front_path_11", "front_path_9", "back_path_8", "back_path_11", "back_path_12", "left_path_8", "left_path_7", "left_path_9", "right_path_8", "right_path_9", "right_path_7"]
  }
};

/* ------------- GLOBAL COLOR APPLY ------------ */
const applyGlobalColors = (canvas, colors) => {
  if (!canvas) return;

  const applyColor = (obj) => {
    if (obj.customPart && colors[obj.customPart]) {
      obj.set("fill", colors[obj.customPart]);
      obj.dirty = true;
      obj.setCoords();
    }
    if (obj._objects) obj._objects.forEach(applyColor);
  };

  if (canvas.mainGroup) applyColor(canvas.mainGroup);

  canvas.getObjects().forEach((obj) => {
    if (obj !== canvas.mainGroup && !obj.isUserObject) applyColor(obj);
  });

  canvas.requestRenderAll();
};

/* -------------------- MAIN COMPONENT -------------------- */
const CustomizerSVG = () => {
  const canvasRef = useRef(null);
  const thumbnailCanvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const { productType } = useParams();

  const selectedSVGs = svgMap[productType] || svgMap.polotshirt;
  const colorLabels = labelMap[productType] || labelMap.polotshirt;
  const partMap = partMapSet[productType] || partMapSet.polotshirt;

  const [viewStates, setViewStates] = useState([null, null, null, null]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTool, setActiveTool] = useState("color");
  const [globalPartColors, setGlobalPartColors] = useState({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  /* -------- Force export tool for these products ------- */
  useEffect(() => {
    if (["polotshirt", "roundneck"].includes(productType.toLowerCase())) {
      setActiveTool("export");
    }
  }, [productType]);

  /* ---------------- EXTRACT USER OBJECTS ---------------- */
  const extractUserObjects = (canvas) => {
    return canvas?.getObjects?.().filter((o) => o.isUserObject) || [];
  };

  /* ---------------- SAVE CURRENT VIEW ---------------- */
  const saveCurrentViewState = () => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;

    const userObjects = extractUserObjects(canvas).map((o) =>
      o.toObject([
        "type",
        "left",
        "top",
        "scaleX",
        "scaleY",
        "angle",
        "flipX",
        "flipY",
        "fontFamily",
        "fill",
        "text",
        "src",
        "width",
        "height",
        "fontSize",
        "fontWeight",
        "textAlign",
        "customPart",
      ])
    );

    const json = canvas.toJSON(["id", "customPart"]);
    const updated = [...viewStates];
    updated[activeIndex] = {
      ...json,
      userObjects,
      globalPartColors: { ...globalPartColors },
    };
    setViewStates(updated);
  };

  /* ---------------- THUMBNAIL CLICK ---------------- */
  const handleThumbnailClick = (index) => {
    if (index === activeIndex) return;
    saveCurrentViewState();
    setActiveIndex(index);
  };

  /* ---------------- UPDATE THUMBNAIL ---------------- */
  const updateThumbnail = (index) => {
    const srcCanvas = canvasRef.current?.fabricCanvas;
    const dstCanvas = thumbnailCanvasRefs.current[index].current;

    if (!srcCanvas || !dstCanvas || !viewStates[index]) return;

    const tempCanvas = new fabric.Canvas(document.createElement("canvas"), {
      width: dstCanvas.width,
      height: dstCanvas.height,
    });

    tempCanvas.loadFromJSON(viewStates[index], () => {
      applyGlobalColors(tempCanvas, globalPartColors);

      setTimeout(() => {
        const dataUrl = tempCanvas.toDataURL();
        const thumbCanvas = new fabric.StaticCanvas(dstCanvas);

        fabric.Image.fromURL(dataUrl, (img) => {
          const scale = Math.min(
            dstCanvas.width / img.width,
            dstCanvas.height / img.height
          );
          img.scale(scale);
          img.set({
            left: (dstCanvas.width - img.width * scale) / 2,
            top: (dstCanvas.height - img.height * scale) / 2,
          });

          thumbCanvas.clear();
          thumbCanvas.add(img);
          thumbCanvas.renderAll();
        });

        tempCanvas.dispose();
      }, 50);
    });
  };

  const updateAllThumbnails = () => {
    thumbnailCanvasRefs.current.forEach((_, i) => updateThumbnail(i));
  };

  /* ---------------- GLOBAL COLOR CHANGE ---------------- */
  const handleGlobalColorChange = (colors) => {
    setGlobalPartColors(colors);

    const canvas = canvasRef.current?.fabricCanvas;
    if (canvas) applyGlobalColors(canvas, colors);

    const updated = viewStates.map((state, idx) => {
      if (!state) return null;
      if (idx === activeIndex) {
        const canvas = canvasRef.current?.fabricCanvas;
        const userObjects = extractUserObjects(canvas).map((o) =>
          o.toObject([
            "type",
            "left",
            "top",
            "scaleX",
            "scaleY",
            "angle",
            "flipX",
            "flipY",
            "fontFamily",
            "fill",
            "text",
            "src",
            "width",
            "height",
            "fontSize",
            "fontWeight",
            "textAlign",
            "customPart",
          ])
        );
        const json = canvas.toJSON(["id", "customPart"]);
        return { ...json, userObjects, globalPartColors: colors };
      }
      return { ...state, globalPartColors: colors };
    });

    setViewStates(updated);
    updateAllThumbnails();
  };

  /* ---------------- LOAD VIEW WHEN INDEX CHANGES ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;

    const state = viewStates[activeIndex];
    if (!state) return;

    const colors = state.globalPartColors || {};
    setGlobalPartColors(colors);

    canvas.loadFromJSON(state, () => {
      canvas.mainGroup = canvas.getObjects().find((o) => o.isPartOfGroup);
      applyGlobalColors(canvas, colors);

      if (Array.isArray(state.userObjects)) {
        fabric.util.enlivenObjects(state.userObjects, (objects) => {
          objects.forEach((o) => {
            o.isUserObject = true;
            o.set({ selectable: true, evented: true });
            canvas.add(o);
          });
          canvas.renderAll();
        });
      }
    });
  }, [activeIndex]);

  /* ---------------- PREVIEW MODE HANDLER ---------------- */
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

      {/* TOP HEADER */}
      <div className="customizer-header">
        <h2>Create your design</h2>

        <div className="header-actions">
          <button className="preview-btn" onClick={() => setIsPreviewOpen(true)}>
            Preview
          </button>
        </div>
      </div>

      {/* TOP THUMBNAILS */}
      <div className="top-tools-bar">
        <CanvasToolbar canvasRef={canvasRef} onUndo={() => { }} onRedo={() => { }} />
        <div className="thumbnail-bar">
          <ThumbnailGallery
            thumbnailCanvasRefs={thumbnailCanvasRefs}
            activeIndex={activeIndex}
            initialSVGs={selectedSVGs}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>
      </div>

      <div className="customizer-body">

        {/* LEFT TOOLBAR */}
        <aside className="left-toolbar">
          <VerticalToolbar
            onSelectTool={setActiveTool}
            flag={true}
            productType={productType}
          />
        </aside>

        {/* RIGHT SIDEBAR — NOW IN MIDDLE */}
        <aside className="right-sidebar">
          {activeTool === "upload" && (
            <UploadControls
              canvasRef={canvasRef}
              updateThumbnail={() => updateThumbnail(activeIndex)}
              saveCurrentViewState={saveCurrentViewState}
            />
          )}

          {activeTool === "text" && (
            <TextControls
              canvasRef={canvasRef}
              updateThumbnail={() => updateThumbnail(activeIndex)}
              saveCurrentViewState={saveCurrentViewState}
            />
          )}

          {activeTool === "color" && (
            <ColorPalette
              canvasRef={canvasRef}
              labels={colorLabels}
              globalPartColors={globalPartColors}
              setGlobalPartColors={handleGlobalColorChange}
              updateThumbnail={() => updateThumbnail(activeIndex)}
            />
          )}

          {activeTool === "name" && (
            <NameNumberInput
              canvasRef={canvasRef}
              updateThumbnail={() => updateThumbnail(activeIndex)}
              saveCurrentViewState={saveCurrentViewState}
            />
          )}

          {activeTool === "export" && (
            <ExportButtons
              canvasRef={canvasRef}
              thumbnailCanvasRefs={thumbnailCanvasRefs}
              viewStates={viewStates}
              onOpenPreview={() => setIsPreviewOpen(true)}
            />
          )}
        </aside>

        {/* CANVAS — NOW MOVED TO RIGHT-SIDE */}
        <main className="canvas-area">
          <div className="canvas-container">
            <ProductCustomizer
              canvasRef={canvasRef}
              mainImageUrl={selectedSVGs[activeIndex]}
              partMap={partMap}
              savedState={viewStates[activeIndex]}
              globalPartColors={globalPartColors}
            />
          </div>
        </main>
      </div>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setActiveTool("color");
        }}
        viewStates={viewStates}
        originalSVGs={selectedSVGs}
        globalPartColors={globalPartColors}
      />
    </div>
  );
};

export default CustomizerSVG;
