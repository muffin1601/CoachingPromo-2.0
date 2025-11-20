import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import "../styles/PreviewModal.css";
import { X, Download, Eye } from "lucide-react";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import SubmitForm from "./SubmitForm";

const PreviewModalPNG = ({ isOpen, onClose, viewStates }) => {
  const canvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const [showForm, setShowForm] = useState(false);
  const [companyname, setCompanyName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // LOAD PREVIEW CANVASES
  // -----------------------------
  useEffect(() => {
    if (!isOpen) return;

    canvasRefs.current.forEach((ref, index) => {
      const canvasEl = ref.current;
      const state = viewStates[index];
      if (!canvasEl || !state) return;

      const canvas = new fabric.StaticCanvas(canvasEl, {
        width: 200,
        height: 200,
      });

      canvas.clear();

      canvas.loadFromJSON(state, () => {
        if (state.backgroundImageUrl) {
          fabric.Image.fromURL(state.backgroundImageUrl, (img) => {
            img.scaleToWidth(200);
            canvas.setBackgroundImage(img, () => canvas.renderAll());
          });
        } else {
          canvas.renderAll();
        }
      });
    });
  }, [isOpen, viewStates]);

  // -----------------------------
  // PDF GENERATION
  // -----------------------------
  const generatePDF = async () => {
    if (!phone.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    const imageWidth = 90;
    const imageHeight = 130;

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

        const tempCanvasEl = document.createElement("canvas");
        tempCanvasEl.width = 900;
        tempCanvasEl.height = 900;

        const tempCanvas = new fabric.StaticCanvas(tempCanvasEl);

        await new Promise((resolve, reject) => {
          tempCanvas.loadFromJSON(state, () => {
            const render = () => {
              tempCanvas.renderAll();
              const dataUrl = tempCanvas.toDataURL({ format: "png", multiplier: 2 });
              const pos = positions[i] || positions[0];
              pdf.addImage(dataUrl, "PNG", pos.x, pos.y, imageWidth, imageHeight);
              resolve();
            };

            if (state.backgroundImageUrl) {
              fabric.Image.fromURL(state.backgroundImageUrl, (img) => {
                img.set({
                  left: 0,
                  top: 0,
                  scaleX: tempCanvas.width / img.width,
                  scaleY: tempCanvas.height / img.height,
                  selectable: false,
                  evented: false,
                });
                tempCanvas.setBackgroundImage(img, render);
              });
            } else {
              render();
            }
          });

          setTimeout(() => reject(new Error("Canvas render timeout")), 6000);
        });
      }

      pdf.save("customized-design.pdf");

      // Send email only if not test number
      if (phone !== "9990590321") {
        const blob = pdf.output("blob");
        const file = new File([blob], "customized-design.pdf", { type: "application/pdf" });

        const formData = new FormData();
        formData.append("pdf", file);
        formData.append("companyname", companyname);
        formData.append("phone", phone);
        formData.append("message", message);

        await fetch("/api/send-email", { method: "POST", body: formData });

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
      console.error("PDF generation failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const labels = ["Front", "Back", "Left", "Right"];

  return (
    <div className="preview-overlay">
      <div className="preview-modal">
        <button className="preview-close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        <h2 className="preview-title">
          <Eye className="icon" /> Preview Design
        </h2>

        <button className="download-btn" onClick={() => setShowForm(true)}>
          <Download className="icon" /> Download Design
        </button>

        <div className="preview-grid">
          {canvasRefs.current.map((ref, idx) => (
            <div key={idx} className="preview-card">
              <canvas ref={ref} width={200} height={200} className="preview-canvas" />
              <p className="preview-label">{labels[idx]}</p>
            </div>
          ))}
        </div>
      </div>

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

export default PreviewModalPNG;
