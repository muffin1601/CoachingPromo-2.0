import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";
import "../styles/UploadControls.css";
import { UploadCloud } from "lucide-react";

const UploadControls = ({ canvasRef, updateThumbnail, saveCurrentViewState, activeIndex }) => {
  const fileInputRef = useRef(null);

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const deleteObject = (eventData, transform) => {
    const target = transform.target;
    const canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
    updateThumbnail(activeIndex);
  };

  const renderDeleteIcon = (ctx, left, top) => {
    const size = 20;
    ctx.save();
    ctx.translate(left, top);

    ctx.beginPath();
    ctx.arc(0, 0, size / 2, 0, Math.PI * 2, true);
    ctx.fillStyle = "#d81212";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-6, -6);
    ctx.lineTo(6, 6);
    ctx.moveTo(6, -6);
    ctx.lineTo(-6, 6);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
  };

  const addImageToCanvas = (dataUrl) => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;

    fabric.Image.fromURL(dataUrl, (img) => {
      img.set({
        left: 120,
        top: 120,
        scaleX: 0.5,
        scaleY: 0.5,
        hasBorders: true,
        hasControls: true,
        cornerStyle: "circle",
      });

      img.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -10,
        offsetX: 10,
        cursorStyle: "pointer",
        mouseUpHandler: deleteObject,
        render: renderDeleteIcon,
        cornerSize: 24,
      });

      img.isUserObject = true;

      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.requestRenderAll();

      saveCurrentViewState();
      updateThumbnail(activeIndex);

      setTimeout(() => updateThumbnail(activeIndex), 150);
    });
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      addImageToCanvas(reader.result);
      resetFileInput();
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;

    const canvasEl = canvas.lowerCanvasEl;
    if (!canvasEl) return;

    const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => addImageToCanvas(reader.result);
        reader.readAsDataURL(file);
      }

      resetFileInput();
    };

    const handleDragOver = (e) => e.preventDefault();

    canvasEl.addEventListener("drop", handleDrop);
    canvasEl.addEventListener("dragover", handleDragOver);

    return () => {
      canvasEl.removeEventListener("drop", handleDrop);
      canvasEl.removeEventListener("dragover", handleDragOver);
    };
  }, [canvasRef]);

  useEffect(() => {
    resetFileInput();
  }, []);

  return (
    <div className="uc-container">
      <label className="uc-upload-box" onClick={() => fileInputRef.current?.click()}>
        <UploadCloud className="uc-icon" />
        <p>Click to Upload Logo</p>
        <span className="uc-subtext">or drag & drop on the canvas</span>
      </label>

      <input
        ref={fileInputRef}
        className="uc-file-input"
        type="file"
        onChange={handleUpload}
        accept="image/*"
      />
    </div>
  );
};

export default UploadControls;
