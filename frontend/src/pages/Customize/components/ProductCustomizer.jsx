import React, { useEffect, useCallback, useRef } from "react";
import { fabric } from "fabric";
import "../styles/ProductCustomizer.css";

const ProductCustomizer = ({
  canvasRef,
  mainImageUrl,
  partMap = {},
  savedState,
  globalPartColors = {},
}) => {

  const fabricInstanceRef = useRef(null);

  /* ---------------- APPLY GLOBAL COLORS ---------------- */
  const applyGlobalColors = useCallback(
    (canvas) => {
      if (!canvas) return;

      const applyColor = (o) => {
        if (o.customPart && globalPartColors[o.customPart]) {
          o.set("fill", globalPartColors[o.customPart]);
          o.dirty = true;
          o.setCoords();
        }
        if (o._objects) o._objects.forEach(applyColor);
      };

      canvas.getObjects().forEach(applyColor);
      canvas.requestRenderAll();
    },
    [globalPartColors]
  );

  /* ---------------- LOAD SVG ---------------- */
  const loadSVG = useCallback(
    async (url, canvas) => {
      try {
        const response = await fetch(url);
        const svgText = await response.text();

        const cleaned = svgText
          .replace(/<\?xml[^>]+\?>/, "")
          .replace(/<!DOCTYPE[^>[]+(\[[^]]+\])?>/, "")
          .replace(/<\/*\s*[\w\-]+:/g, (match) => match.toLowerCase());

        fabric.loadSVGFromString(
          cleaned,
          (objects, options) => {
            if (!objects || objects.length === 0) return;

            const assignParts = (obj) => {
              if (obj.id) {
                for (const [part, ids] of Object.entries(partMap)) {
                  if (ids.includes(obj.id)) obj.customPart = part;
                }
              }
              obj.set({
                objectCaching: true,
                selectable: false,
                evented: false,
              });
              if (obj._objects) obj._objects.forEach(assignParts);
            };

            objects.forEach(assignParts);

            const group = new fabric.Group(objects, {
              ...options,
              selectable: false,
              evented: false,
            });

            const cw = canvas.getWidth();
            const ch = canvas.getHeight();
            const rect = group.getBoundingRect();
            const scale = Math.min((cw * 0.9) / rect.width, (ch * 0.9) / rect.height);

            group.scale(scale);
            group.set({
              left: cw / 2,
              top: ch / 2,
              originX: "center",
              originY: "center",
            });

            canvas.clear();
            canvas.add(group);
            canvas.mainGroup = group;

            applyGlobalColors(canvas);
            canvas.renderAll();
          },
          null,
          {
            crossOrigin: "anonymous",
            suppressPreamble: true,
          }
        );
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    },
    [partMap, applyGlobalColors]
  );

  /* ---------------- INIT FABRIC CANVAS ---------------- */
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const calcSize = () => {
      const w = window.innerWidth;
      let width = 550, height = 580;
      if (w < 768) {
        width = w * 0.9;
        height = width * 1.26;
      }
      return { width, height };
    };

    const { width, height } = calcSize();

    if (!fabricInstanceRef.current) {
      // CREATE canvas only once
      fabricInstanceRef.current = new fabric.Canvas(el, {
        width,
        height,
        preserveObjectStacking: true,
      });

      // 🔥 IMPORTANT: Expose fabric canvas globally
      canvasRef.current.fabricCanvas = fabricInstanceRef.current;

    } else {
      fabricInstanceRef.current.setWidth(width);
      fabricInstanceRef.current.setHeight(height);
      fabricInstanceRef.current.renderAll();

      // 🔥 Ensure always attached on resize
      canvasRef.current.fabricCanvas = fabricInstanceRef.current;
    }

    const resizeHandler = () => {
      const { width, height } = calcSize();
      const canvas = fabricInstanceRef.current;
      if (canvas) {
        canvas.setWidth(width);
        canvas.setHeight(height);
        canvas.renderAll();

        // 🔥 maintain connection
        canvasRef.current.fabricCanvas = canvas;
      }
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [canvasRef]);

  /* ---------------- LOAD IMAGE / SVG / STATE ---------------- */
  useEffect(() => {
    const canvas = fabricInstanceRef.current;
    if (!canvas || !mainImageUrl) return;

    if (savedState) {
      const userObjs = Array.isArray(savedState.userObjects)
        ? savedState.userObjects
        : [];

      canvas.loadFromJSON(savedState, () => {
        canvas.mainGroup = canvas.getObjects().find(o => o.isPartOfGroup);

        fabric.util.enlivenObjects(userObjs, (objs) => {
          objs.forEach((o) => {
            o.set({ selectable: true, evented: true });
            o.isUserObject = true;
            canvas.add(o);
          });
          applyGlobalColors(canvas);
          canvas.renderAll();
        });
      });

      return;
    }

    if (mainImageUrl.toLowerCase().endsWith(".svg")) {
      loadSVG(mainImageUrl, canvas);
    } else {
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
    }
  }, [mainImageUrl, savedState, partMap, loadSVG, applyGlobalColors]);

  /* ---------------- APPLY GLOBAL COLORS ---------------- */
  useEffect(() => {
    const canvas = fabricInstanceRef.current;
    if (canvas) applyGlobalColors(canvas);
  }, [globalPartColors, applyGlobalColors]);

  /* ---------------- CLEANUP ---------------- */
  useEffect(() => {
    return () => {
      if (fabricInstanceRef.current) {
        fabricInstanceRef.current.dispose();
        fabricInstanceRef.current = null;
      }
    };
  }, []);

  /* ---------------- RENDER CANVAS ---------------- */
  return (
    <canvas
      ref={(el) => (canvasRef.current = el)}
      className="product-customizer-canvas"
    />
  );
};

export default ProductCustomizer;
