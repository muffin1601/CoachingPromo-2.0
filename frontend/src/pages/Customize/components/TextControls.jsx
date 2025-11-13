import React, { useState } from "react";
import { fabric } from "fabric";
import "../styles/TextControls.css";
import { Type, PaintBucket } from "lucide-react";

const TextControls = ({ canvasRef, updateThumbnail, saveCurrentViewState, activeIndex }) => {
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial");
  const [color, setColor] = useState("#000000");

  /* ---------------- DELETE CONTROL ---------------- */
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

  /* ---------------- ADD TEXT ---------------- */
  const addText = () => {
    if (!text.trim()) return;

    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas) return;

    const textbox = new fabric.Textbox(text, {
      left: 150,
      top: 150,
      fontFamily: font,
      fill: color,
      fontSize: 24,
      hasControls: true,
      cornerStyle: "circle",
    });

    textbox.isUserObject = true;

    textbox.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -10,
      offsetX: 10,
      cursorStyle: "pointer",
      mouseUpHandler: deleteObject,
      render: renderDeleteIcon,
      cornerSize: 24,
    });

    canvas.add(textbox);
    canvas.setActiveObject(textbox);
    canvas.requestRenderAll();

    saveCurrentViewState();
    updateThumbnail(activeIndex);
    setText("");

    setTimeout(() => updateThumbnail(activeIndex), 150);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="tc-container">
      <h3 className="tc-title">
        <Type className="tc-icon" /> Add Text
      </h3>

      <div className="tc-grid">
        {/* TEXT INPUT */}
        <div className="tc-field">
          <label>Text</label>
          <input
            className="tc-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            style={{ fontFamily: font }}
          />
        </div>

        {/* FONT SELECT */}
        <div className="tc-field">
          <label>Font</label>
          <select
            className="tc-select"
            value={font}
            onChange={(e) => setFont(e.target.value)}
            style={{ fontFamily: font }}
          >
            <option style={{ fontFamily: "Arial" }}>Arial</option>
            <option style={{ fontFamily: "Georgia" }}>Georgia</option>
            <option style={{ fontFamily: "Courier" }}>Courier</option>
            <option style={{ fontFamily: "Impact" }}>Impact</option>
            <option style={{ fontFamily: "Times New Roman" }}>Times New Roman</option>
            <option style={{ fontFamily: "Verdana" }}>Verdana</option>
            <option style={{ fontFamily: "Trebuchet MS" }}>Trebuchet MS</option>
            <option style={{ fontFamily: "Tahoma" }}>Tahoma</option>
          </select>
        </div>

        {/* COLOR PICKER */}
        <div className="tc-field">
          <label>Color</label>
          <input
            type="color"
            className="tc-color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>

      <button className="tc-btn" onClick={addText}>
        Add Text
      </button>
    </div>
  );
};

export default TextControls;
