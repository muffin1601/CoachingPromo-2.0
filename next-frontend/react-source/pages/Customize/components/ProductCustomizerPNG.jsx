import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";
import "../styles/ProductCustomizer.css";

const ProductCustomizerPNG = ({ canvasRef, mainImageUrl, savedState }) => {
  const fabricCanvasRef = useRef(null);

  /* INIT CANVAS */
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const canvas = new fabric.Canvas(el, {
      width: 550,
      height: 580,
      preserveObjectStacking: true,
    });

    fabricCanvasRef.current = canvas;
    canvasRef.current.fabricCanvas = canvas;

    return () => canvas.dispose();
  }, []);

  /* LOAD PNG OR SAVED STATE */
  useEffect(() => {
    const canvas = fabricCanvasRef.current;
    if (!canvas || !mainImageUrl) return;

    if (savedState) {
      canvas.loadFromJSON(savedState, () => canvas.renderAll());
      return;
    }

    fabric.Image.fromURL(
      mainImageUrl,
      (img) => {
        const cw = canvas.getWidth();
        const ch = canvas.getHeight();
        const scale = Math.min(cw / img.width, ch / img.height);

        img.set({
          originX: "center",
          originY: "center",
          left: cw / 2,
          top: ch / 2,
          scaleX: scale,
          scaleY: scale,
          selectable: false,
          evented: false,
        });

        canvas.setBackgroundImage(img, () => canvas.renderAll());
      },
      { crossOrigin: "anonymous" }
    );
  }, [mainImageUrl, savedState]);

  return <canvas ref={canvasRef} className="product-customizer-canvas" />;
};

export default ProductCustomizerPNG;
