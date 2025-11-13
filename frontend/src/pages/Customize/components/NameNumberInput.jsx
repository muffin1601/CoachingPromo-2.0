import React, { useState } from "react";
import { fabric } from "fabric";
import "../styles/NameNumberInput.css";
import { Type, Hash } from "lucide-react";

const fonts = [
  "Arial",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Comic Sans MS",
  "Impact",
  "Verdana",
  "Trebuchet MS",
  "Tahoma",
  "Lucida Console",
];

const NameNumberInput = ({ canvasRef, updateThumbnail, saveCurrentViewState, activeIndex }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [color, setColor] = useState("#000000");
  const [font, setFont] = useState(fonts[0]);
  const [nameObj, setNameObj] = useState(null);
  const [numberObj, setNumberObj] = useState(null);

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
    ctx.fillStyle = "#e41d1d";
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

  /* ---------------- ADD NAME + NUMBER ---------------- */
  const addNameAndNumber = () => {
    const canvas = canvasRef.current?.fabricCanvas;
    if (!canvas || (!name && !number)) return;

    if (nameObj) canvas.remove(nameObj);
    if (numberObj) canvas.remove(numberObj);

    let newNameObject = null;
    let newNumberObject = null;

    if (name) {
      newNameObject = new fabric.Text(name, {
        top: 400,
        left: 250,
        fontSize: 20,
        fill: color,
        fontWeight: "bold",
        fontFamily: font,
        selectable: true,
        cornerStyle: "circle",
      });

      newNameObject.isUserObject = true;

      newNameObject.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -10,
        offsetX: 10,
        cursorStyle: "pointer",
        mouseUpHandler: deleteObject,
        render: renderDeleteIcon,
        cornerSize: 24,
      });

      canvas.add(newNameObject);
      setNameObj(newNameObject);
    }

    if (number) {
      newNumberObject = new fabric.Text(number, {
        top: 430,
        left: 250,
        fontSize: 28,
        fill: color,
        fontWeight: "bold",
        fontFamily: font,
        selectable: true,
        cornerStyle: "circle",
      });

      newNumberObject.isUserObject = true;

      newNumberObject.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -10,
        offsetX: 10,
        cursorStyle: "pointer",
        mouseUpHandler: deleteObject,
        render: renderDeleteIcon,
        cornerSize: 24,
      });

      canvas.add(newNumberObject);
      setNumberObj(newNumberObject);
    }

    canvas.requestRenderAll();
    saveCurrentViewState();
    updateThumbnail(activeIndex);

    setName("");
    setNumber("");

    setTimeout(() => updateThumbnail(activeIndex), 150);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="nn-container">

      <h3 className="nn-title">Add Name & Number</h3>

      <div className="nn-grid">

        {/* Name input */}
        <div className="nn-field">
          <label className="nn-label">
            <Type className="nn-icon" /> Name
          </label>
          <input
            className="nn-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        {/* Number input */}
        <div className="nn-field">
          <label className="nn-label">
            <Hash className="nn-icon" /> Number
          </label>
          <input
            className="nn-input"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter number"
          />
        </div>

        {/* Color picker */}
        <div className="nn-field">
          <label className="nn-label">Color</label>
          <input
            type="color"
            className="nn-color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        {/* Font selector */}
        <div className="nn-field">
          <label className="nn-label">Font</label>
          <select
            className="nn-select"
            value={font}
            onChange={(e) => setFont(e.target.value)}
          >
            {fonts.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="nn-btn" onClick={addNameAndNumber}>
        Add to Design
      </button>
    </div>
  );
};

export default NameNumberInput;
