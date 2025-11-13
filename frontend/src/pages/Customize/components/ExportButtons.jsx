import React, { useState } from "react";
import jsPDF from "jspdf";
import "../styles/ExportButtons.css";
import { toast } from "react-toastify";
import { X, FileDown, Ruler, Shirt } from "lucide-react";
import SubmitForm from "./SubmitForm";

const ExportButtons = ({ thumbnailCanvasRefs, viewStates }) => {
  const [showForm, setShowForm] = useState(false);
  const [companyname, setCompanyName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sizes, setSizes] = useState({
    M: 0, L: 0, XL: 0, XXL: 0, "3XL": 0, "4XL": 0, "5XL": 0, "6XL": 0, "7XL": 0
  });
  const [showChart, setShowChart] = useState(false);

  const handleSizeChange = (e, size) => {
    setSizes({ ...sizes, [size]: parseInt(e.target.value) || 0 });
  };

  const totalQuantity = Object.values(sizes).reduce((sum, val) => sum + val, 0);

  const generatePDF = async () => {
    if (!phone.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const imageWidth = 90;

    const positions = [
      { x: 10, y: 10 },
      { x: 110, y: 10 },
      { x: 10, y: 150 },
      { x: 110, y: 150 }
    ];

    try {
      for (let i = 0; i < viewStates.length; i++) {
        const state = viewStates[i];
        if (!state) continue;

        const originalWidth = state.canvasWidth || 500;
        const originalHeight = state.canvasHeight || 630;

        const tempCanvasEl = document.createElement("canvas");
        tempCanvasEl.width = originalWidth;
        tempCanvasEl.height = originalHeight;

        const tempCanvas = new fabric.StaticCanvas(tempCanvasEl);
        tempCanvas.setWidth(originalWidth);
        tempCanvas.setHeight(originalHeight);

        await new Promise((resolve, reject) => {
          tempCanvas.loadFromJSON(state, () => {
            const renderCanvas = () => {
              tempCanvas.renderAll();
              setTimeout(() => {
                try {
                  const dataUrl = tempCanvas.toDataURL({ format: "png", multiplier: 2 });
                  const scale = imageWidth / originalWidth;
                  const imageHeight = originalHeight * scale;
                  const pos = positions[i] || { x: 10, y: 10 };
                  pdf.addImage(dataUrl, "PNG", pos.x, pos.y, imageWidth, imageHeight);
                  resolve();
                } catch (err) {
                  reject(err);
                }
              }, 300);
            };

            if (state.backgroundImageUrl) {
              fabric.Image.fromURL(
                state.backgroundImageUrl,
                (img) => {
                  img.set({
                    originX: "left",
                    originY: "top",
                    left: 0,
                    top: 0,
                    scaleX: originalWidth / img.width,
                    scaleY: originalHeight / img.height,
                    selectable: false,
                    evented: false,
                  });
                  tempCanvas.setBackgroundImage(img, renderCanvas);
                },
                { crossOrigin: "anonymous" }
              );
            } else {
              renderCanvas();
            }
          });
        });
      }

      const blob = pdf.output("blob");
      const file = new File([blob], "customized-design.pdf", { type: "application/pdf" });

      pdf.save("customized-design.pdf");

      if (phone !== "9990590321") {
        const formData = new FormData();
        formData.append("pdf", file);
        formData.append("companyname", companyname);
        formData.append("phone", phone);
        formData.append("message", message);
        formData.append("sizes", JSON.stringify(sizes || {}));

        await fetch(`${import.meta.env.VITE_API_URL}/send-email`, { method: "POST", body: formData });

        await fetch(import.meta.env.VITE_CRM_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_CRM_API_KEY,
          },
          body: JSON.stringify({ companyname, phone, message }),
        });
      }

      toast.success("PDF downloaded successfully!");
      setShowForm(false);
    } catch (error) {
      console.error("PDF generation error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="export-container">

      {/* SIZE INPUT WRAPPER */}
      <div className="export-card">
        <h3 className="export-title">
          <Shirt className="icon" /> Order Sizes
        </h3>

        <div className="size-grid">
          {Object.keys(sizes).map((size) => (
            <div className="size-row" key={size}>
              <label>{size}</label>
              <input
                type="number"
                min="0"
                value={sizes[size]}
                onChange={(e) => handleSizeChange(e, size)}
              />
            </div>
          ))}

          <div className="size-row total">
            <label>Total</label>
            <input type="number" value={totalQuantity} readOnly />
          </div>
        </div>
      </div>

      {/* MATERIAL & PRINT TYPE */}
      <div className="export-card">
        <h3 className="export-title">
          <Ruler className="icon" /> Specifications
        </h3>

        <select className="export-dropdown">
          <option value="">Select Material Type</option>
          <option value="cotton">Cotton</option>
          <option value="polycotton">Polycotton</option>
          <option value="dryfit">Dry Fit</option>
        </select>

        <select className="export-dropdown">
          <option value="">Select Print Type</option>
          <option value="Screen Print">Screen Print</option>
          <option value="Digital Print">Digital Print</option>
          <option value="Embroidary">Embroidery</option>
        </select>
      </div>

      {/* ACTION BUTTONS */}
      <div className="export-actions">
        <button className="outline-btn" onClick={() => setShowChart(true)}>
          View Size Chart
        </button>

        <button className="primary-btn" onClick={() => setShowForm(true)}>
          <FileDown className="icon" />
          Download Design
        </button>
      </div>

      {/* SIZE CHART MODAL */}
      {showChart && (
        <div className="chart-overlay">
          <div className="chart-box">
            <div className="chart-header">
              <h2>Size Chart</h2>
              <button className="close-btn" onClick={() => setShowChart(false)}>
                <X />
              </button>
            </div>

            <img src="/size-chart.webp" alt="Size Chart" className="chart-image" />
          </div>
        </div>
      )}

      {/* FORM MODAL */}
      {showForm && (
        <SubmitForm
          onSubmit={generatePDF}
          onCancel={() => setShowForm(false)}
          loading={loading}
          companyname={companyname}
          setCompanyName={setCompanyName}
          phone={phone}
          setPhoneNumber={setPhoneNumber}
          message={message}
          setMessage={setMessage}
        />
      )}
    </div>
  );
};

export default ExportButtons;
