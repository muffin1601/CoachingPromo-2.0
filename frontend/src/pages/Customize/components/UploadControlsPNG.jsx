import React, { useRef } from "react";
import { fabric } from "fabric";
import "../styles/UploadControls.css";
import { UploadCloud } from "lucide-react";

const UploadControlsPNG = ({ canvasRef, updateThumbnail, saveCurrentViewState, activeIndex }) => {
  const inputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const canvas = canvasRef.current.fabricCanvas;
    if (!canvas) return;

    const reader = new FileReader();
    reader.onload = () => {
      fabric.Image.fromURL(reader.result, (img) => {
        img.set({
          left: 120,
          top: 120,
          scaleX: 0.5,
          scaleY: 0.5,
        });

        img.isUserObject = true;
        canvas.add(img);
        canvas.requestRenderAll();

        saveCurrentViewState();
        updateThumbnail(activeIndex);
      });
    };

    reader.readAsDataURL(file);
    inputRef.current.value = "";
  };

  return (
    <div className="uc-container">
      <label className="uc-upload-box" onClick={() => inputRef.current.click()}>
        <UploadCloud className="uc-icon" />
        <p>Upload Logo</p>
      </label>

      <input
        ref={inputRef}
        className="uc-file-input"
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
};

export default UploadControlsPNG;
