import React, { useState } from "react";
import { fabric } from "fabric";
import "../styles/TextControls.css";
import { Type } from "lucide-react";

const TextControlsPNG = ({ canvasRef, updateThumbnail, saveCurrentViewState, activeIndex }) => {
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial");
  const [color, setColor] = useState("#000000");

  const addText = () => {
    const canvas = canvasRef.current.fabricCanvas;
    if (!canvas || !text.trim()) return;

    const textbox = new fabric.Textbox(text, {
      left: 150,
      top: 150,
      fontFamily: font,
      fill: color,
      fontSize: 24,
    });

    textbox.isUserObject = true;
    canvas.add(textbox);
    canvas.requestRenderAll();

    saveCurrentViewState();
    updateThumbnail(activeIndex);
    setText("");
  };

  return (
    <div className="tc-container">

      <h3 className="tc-title">
        <Type aria-hidden="true" /> Text
      </h3>

      {/* TEXT INPUT */}
      <div className="tc-field">
        <label htmlFor="tc-text">Text</label>
        <input
          id="tc-text"
          className="tc-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          aria-label="Enter text to add to design"
        />
      </div>

      {/* FONT SELECT */}
      <div className="tc-field">
        <label htmlFor="tc-font">Font</label>
        <select
          id="tc-font"
          className="tc-select"
          value={font}
          onChange={(e) => setFont(e.target.value)}
          aria-label="Select font style"
        >
          <option>Arial</option>
          <option>Georgia</option>
          <option>Courier</option>
          <option>Impact</option>
        </select>
      </div>

      {/* COLOR PICKER */}
      <div className="tc-field">
        <label htmlFor="tc-color">Color</label>
        <input
          id="tc-color"
          type="color"
          className="tc-color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          aria-label="Select text color"
        />
      </div>

      {/* BUTTON */}
      <button
        className="tc-btn"
        onClick={addText}
        aria-label="Add text to design"
      >
        Add Text
      </button>

    </div>
  );
};

export default TextControlsPNG;
