// CustomizerSVG.js (FULLY OPTIMIZED VERSION)
import React, {
  useRef,
  useState,
  useEffect,
  lazy,
  Suspense,
  useCallback,
} from "react";
import { useParams } from "react-router-dom";
import { fabric } from "fabric";
import "./styles/CustomizerSVG.css";

/* ---------------- LAZY LOAD HEAVY COMPONENTS ---------------- */
const CanvasToolbar = lazy(() => import("./components/CanvasToolbar"));
const ThumbnailGallery = lazy(() => import("./components/ThumbnailGallery"));
const ProductCustomizer = lazy(() => import("./components/ProductCustomizer"));
const UploadControls = lazy(() => import("./components/UploadControls"));
const TextControls = lazy(() => import("./components/TextControls"));
const ColorPalette = lazy(() => import("./components/ColorPalette"));
const NameNumberInput = lazy(() => import("./components/NameNumberInput"));
const ExportButtons = lazy(() => import("./components/ExportButtons"));
const VerticalToolbar = lazy(() => import("./components/VerticalToolbar"));
const PreviewModal = lazy(() => import("./components/PreviewModal"));

/* ---------------- STATIC SVG CONFIG ---------------- */
const svgMap = {
  polotshirt: [
    "/polo/front.svg",
    "/polo/back.svg",
    "/polo/left.svg",
    "/polo/right.svg",
  ],
  roundneck: [
    "/round/front.svg",
    "/round/back.svg",
    "/round/left.svg",
    "/round/right.svg",
  ],
};

const labelMap = {
  polotshirt: {
    fullTshirt: "Body",
    collar: "Collar",
    sleeves: "Sleeves",
  },
  roundneck: {
    fullTshirt: "Body",
    collar: "Neck Rib",
    sleeves: "Sleeves",
  },
};

/* ---------------- MOST HEAVY: PUT OUTSIDE TO PREVENT RE-CREATION ---------------- */
const partMapSet = {
  polotshirt: {
    collar: [
      "front-part-7",
      "front-part-12",
      "front-part-23",
      "front-part-50",
      "front-part-51",
      "front-part-36",
      "front-part-14",
      "front-part-15",
      "back-part-7",
      "back-part-12",
      "back-part-11",
      "left-part-7",
      "left-part-13",
      "left-part-69",
      "left-part-10",
      "left-part-11",
      "right-part-12",
      "right-part-5",
      "right-part-50",
      "right-part-7",
      "right-part-11",
    ],
    sleeves: [
      "front-part-5",
      "front-part-6",
      "back-part-5",
      "back-part-4",
      "right-part-4",
      "left-part-4",
    ],
    fullTshirt: [
      "front-part-2",
      "front-part-8",
      "front-part-10",
      "back-part-2",
      "back-part-6",
      "left-part-2",
      "left-part-9",
      "left-part-12",
      "left-part-8",
      "right-part-2",
      "right-part-9",
      "right-part-8",
      "right-part-6",
    ],
  },

  roundneck: {
    fullTshirt: [
      "front_path_2",
      "front_path_6",
      "front_path_8",
      "back_path_2",
      "back_path_6",
      "left_path_6",
      "left_path_2",
      "right_path_1",
      "right_path_6",
    ],
    sleeves: [
      "front_path_4",
      "front_path_5",
      "back_path_4",
      "back_path_5",
      "left_path_3",
      "right_path_3",
    ],
    collar: [
      "front_path_7",
      "front_path_10",
      "front_path_11",
      "front_path_9",
      "back_path_8",
      "back_path_11",
      "back_path_12",
      "left_path_8",
      "left_path_7",
      "left_path_9",
      "right_path_8",
      "right_path_9",
      "right_path_7",
    ],
  },
};

/* ---------------- APPLY GLOBAL COLORS ---------------- */
const applyGlobalColors = (canvas, colors) => {
  if (!canvas) return;

  const applyColor = (obj) => {
    if (obj.customPart && colors[obj.customPart]) {
      obj.set("fill", colors[obj.customPart]);
      obj.setCoords();
      obj.dirty = true;
    }

    if (obj._objects) obj._objects.forEach(applyColor);
  };

  if (canvas.mainGroup) applyColor(canvas.mainGroup);

  canvas.getObjects().forEach((o) => {
    if (!o.isUserObject) applyColor(o);
  });

  canvas.requestRenderAll();
};

const CustomizerSVG = () => {
  const { productType } = useParams();

  const canvasRef = useRef(null);
  const thumbnailCanvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  /* ---------------- ACTIVE STATE ---------------- */
  const [viewStates, setViewStates] = useState([null, null, null, null]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTool, setActiveTool] = useState("color");
  const [globalPartColors, setGlobalPartColors] = useState({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  /* ---------------- GET STATIC MAPS ONCE ---------------- */
  const selectedSVGs = svgMap[productType] || svgMap.polotshirt;
  const colorLabels = labelMap[productType] || labelMap.polotshirt;
  const partMap = partMapSet[productType] || partMapSet.polotshirt;

  /* ---------------- DEBOUNCED THUMBNAILS ---------------- */
  const debounceRef = useRef(null);

  const updateThumbnail = useCallback(
    (index) => {
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const canvas = canvasRef.current?.fabricCanvas;
        const dst = thumbnailCanvasRefs.current[index]?.current;

        if (!canvas || !dst) return;

        const dataUrl = canvas.toDataURL({ format: "png" });
        const thumbCanvas = new fabric.StaticCanvas(dst);

        fabric.Image.fromURL(dataUrl, (img) => {
          const scale = Math.min(
            dst.width / img.width,
            dst.height / img.height
          );

          img.scale(scale);
          img.set({
            left: (dst.width - img.width * scale) / 2,
            top: (dst.height - img.height * scale) / 2,
          });

          thumbCanvas.clear();
          thumbCanvas.add(img);
          thumbCanvas.renderAll();
        });
      }, 120);
    },
    [thumbnailCanvasRefs]
  );

  const extractUserObjects = (canvas) =>
    canvas.getObjects().filter((o) => o.isUserObject);

  /* ---------------- SAVE CURRENT STATE ---------------- */
  const saveCurrentViewState = useCallback(() => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;

    const userObjects = extractUserObjects(canvas).map((o) =>
      o.toObject([
        "left",
        "top",
        "scaleX",
        "scaleY",
        "angle",
        "text",
        "src",
        "fontFamily",
        "fontSize",
        "fill",
        "fontWeight",
        "customPart",
      ])
    );

    const json = canvas.toJSON(["customPart"]);

    setViewStates((prev) => {
      const copy = [...prev];
      copy[activeIndex] = {
        ...json,
        userObjects,
        globalPartColors: { ...globalPartColors },
      };
      return copy;
    });
  }, [activeIndex, globalPartColors]);

  /* ---------------- SWITCH THUMBNAIL VIEW ---------------- */
  const handleThumbnailClick = (index) => {
    saveCurrentViewState();
    setActiveIndex(index);
  };

  /* ---------------- LOAD SAVED STATE ON SWITCH ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;
    const state = viewStates[activeIndex];
    if (!state) return;

    setGlobalPartColors(state.globalPartColors || {});

    canvas.loadFromJSON(state, () => {
      canvas.mainGroup = canvas.getObjects().find((o) => o.isPartOfGroup);
      applyGlobalColors(canvas, state.globalPartColors);

      if (state.userObjects) {
        fabric.util.enlivenObjects(state.userObjects, (objs) => {
          objs.forEach((o) => canvas.add(o));
          canvas.renderAll();
        });
      }
    });
  }, [activeIndex]);

  /* ---------------- GLOBAL COLOR CHANGE ---------------- */
  const handleGlobalColorChange = (colors) => {
    setGlobalPartColors(colors);
    const canvas = canvasRef.current?.fabricCanvas;
    if (canvas) applyGlobalColors(canvas, colors);

    /* Update viewStates */
    setViewStates((prev) =>
      prev.map((view, idx) =>
        view
          ? {
              ...view,
              globalPartColors: colors,
            }
          : null
      )
    );

    updateThumbnail(activeIndex);
  };

  /* ---------------- PREVIEW ---------------- */
  useEffect(() => {
    if (activeTool === "preview") {
      saveCurrentViewState();
      setIsPreviewOpen(true);
    }
  }, [activeTool]);

  return (
    <div className="customizer-page">
      {/* HEADER */}
      <div className="customizer-header">
        <h2>Create your design</h2>
        <button
          className="preview-btn-top"
          onClick={() => setActiveTool("preview")}
        >
          Preview
        </button>
      </div>

      {/* TOP TOOLBAR */}
      <div className="top-tools-bar">
        <Suspense fallback={<div />}>
          <CanvasToolbar canvasRef={canvasRef} onUndo={() => {}} onRedo={() => {}} />
        </Suspense>

        <Suspense fallback={<div />}>
          <ThumbnailGallery
            thumbnailCanvasRefs={thumbnailCanvasRefs}
            activeIndex={activeIndex}
            initialSVGs={selectedSVGs}
            onThumbnailClick={handleThumbnailClick}
          />
        </Suspense>
      </div>

      <div className="customizer-body">
        {/* LEFT TOOLBAR */}
        <aside className="left-toolbar">
          <Suspense fallback={<div />}>
            <VerticalToolbar
              onSelectTool={setActiveTool}
              flag={true}
              productType={productType}
            />
          </Suspense>
        </aside>

        {/* RIGHT SIDEBAR TOOLS */}
        <aside className="right-sidebar">
          <Suspense fallback={<div />}>
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
                labels={colorLabels}
                globalPartColors={globalPartColors}
                setGlobalPartColors={handleGlobalColorChange}
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
                viewStates={viewStates}
                thumbnailCanvasRefs={thumbnailCanvasRefs}
                onOpenPreview={() => setActiveTool("preview")}
              />
            )}
          </Suspense>
        </aside>

        {/* MAIN CANVAS */}
        <main className="canvas-area">
          <div className="canvas-container">
            <Suspense fallback={<div className="loader" />}>
              <ProductCustomizer
                canvasRef={canvasRef}
                mainImageUrl={selectedSVGs[activeIndex]}
                partMap={partMap}
                savedState={viewStates[activeIndex]}
                globalPartColors={globalPartColors}
              />
            </Suspense>
          </div>
        </main>
      </div>

      {/* PREVIEW MODAL */}
      <Suspense fallback={<div />}>
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
      </Suspense>
    </div>
  );
};

export default CustomizerSVG;
