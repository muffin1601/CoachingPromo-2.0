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
        <Type /> Text
      </h3>

      <div className="tc-field">
        <label>Text</label>
        <input
          className="tc-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
      </div>

      <div className="tc-field">
        <label>Font</label>
        <select
          className="tc-select"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          <option>Arial</option>
          <option>Georgia</option>
          <option>Courier</option>
          <option>Impact</option>
        </select>
      </div>

      <div className="tc-field">
        <label>Color</label>
        <input
          type="color"
          className="tc-color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <button className="tc-btn" onClick={addText}>
        Add Text
      </button>
    </div>
  );
};

export default TextControlsPNG;
