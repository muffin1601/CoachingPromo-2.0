import React, { useEffect, useRef, useState } from "react";
import "../styles/EnquiryModal.css";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const initialForm = {
  requirement: "", quantity: "", branding: "", targetDate: "", notes: "",
  name: "", companyname: "", email: "", phone: "", location: "",
};

const EnquiryModal = ({ isOpen, onClose, image, productName = "" }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ ...initialForm, requirement: productName });
  const [submitting, setSubmitting] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    setFormData((current) => ({ ...current, requirement: current.requirement || productName }));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    window.setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose, productName]);

  const handleChange = ({ target }) => {
    setFormData((current) => ({ ...current, [target.name]: target.value }));
  };

  const canContinue = step === 1
    ? formData.requirement.trim()
    : formData.quantity.trim() && formData.branding.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step < 3) {
      if (canContinue) setStep((current) => current + 1);
      return;
    }

    const message = [
      `Requirement: ${formData.requirement}`,
      `Quantity: ${formData.quantity}`,
      `Branding: ${formData.branding}`,
      formData.targetDate ? `Required by: ${formData.targetDate}` : "",
      formData.notes ? `Notes: ${formData.notes}` : "",
    ].filter(Boolean).join("\n");

    const payload = {
      name: formData.name, email: formData.email, phone: formData.phone,
      companyname: formData.companyname, location: formData.location, message,
    };

    try {
      setSubmitting(true);
      await axios.post("/api/crm", payload, {
        headers: { "Content-Type": "application/json", "x-api-key": "" },
      });
      await axios.post(`${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/send-email`, payload);
      toast.success("Thank you! Our team will contact you shortly.");
      setFormData({ ...initialForm, requirement: productName });
      setStep(1);
      onClose();
    } catch (error) {
      console.error("Quote submission failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="enquiry-overlay show" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="enquiry-modal slide" role="dialog" aria-modal="true" aria-labelledby="quote-dialog-title" ref={dialogRef} tabIndex={-1}>
        <button className="enquiry-close-btn" type="button" onClick={onClose} aria-label="Close quote form"><X size={22} /></button>

        <div className="enquiry-img-box" aria-hidden="true">
          <img src={image} alt="" width={400} height={520} loading="lazy" decoding="async" />
          <div className="enquiry-image-copy"><span>COACHINGPROMO BULK DESK</span><strong>One brief. A clear quote. Dedicated support.</strong></div>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <p className="enquiry-kicker">Request a bulk quote</p>
          <h2 className="enq-title" id="quote-dialog-title">
            {step === 1 && "What do you need?"}
            {step === 2 && "Quantity and branding"}
            {step === 3 && "Where should we reach you?"}
          </h2>
          <p className="enq-subtitle">A focused three-step brief. Most requests take under two minutes.</p>

          <ol className="quote-progress" aria-label={`Step ${step} of 3`}>
            {["Requirement", "Order details", "Contact"].map((label, index) => (
              <li key={label} className={step >= index + 1 ? "active" : ""} aria-current={step === index + 1 ? "step" : undefined}>
                <span>{step > index + 1 ? <Check size={13} /> : index + 1}</span>{label}
              </li>
            ))}
          </ol>

          {step === 1 && (
            <div className="quote-step">
              <label htmlFor="quote-requirement">Product or requirement</label>
              <textarea id="quote-requirement" name="requirement" value={formData.requirement} onChange={handleChange} placeholder="For example: branded polo T-shirts for an institute event" required autoFocus />
              <p className="field-hint">A product name, category, or a short description is enough.</p>
            </div>
          )}

          {step === 2 && (
            <div className="quote-step">
              <div className="enquiry-grid">
                <div><label htmlFor="quote-quantity">Approximate quantity</label><input id="quote-quantity" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 100" required inputMode="numeric" /></div>
                <div><label htmlFor="quote-branding">Branding requirement</label><select id="quote-branding" name="branding" value={formData.branding} onChange={handleChange} required><option value="">Select one</option><option value="Logo printing">Logo printing</option><option value="Embroidery">Embroidery</option><option value="Custom packaging">Custom packaging</option><option value="Need guidance">Need guidance</option><option value="No branding">No branding</option></select></div>
              </div>
              <label htmlFor="quote-date">Target date <span>(optional)</span></label>
              <input id="quote-date" type="date" name="targetDate" value={formData.targetDate} onChange={handleChange} />
              <label htmlFor="quote-notes">Other details <span>(optional)</span></label>
              <textarea id="quote-notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Sizes, colours, delivery details, or anything else we should know" />
            </div>
          )}

          {step === 3 && (
            <div className="quote-step">
              <div className="enquiry-grid">
                <div><label htmlFor="quote-name">Full name</label><input id="quote-name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required /></div>
                <div><label htmlFor="quote-company">Company / institute</label><input id="quote-company" name="companyname" value={formData.companyname} onChange={handleChange} autoComplete="organization" required /></div>
                <div><label htmlFor="quote-email">Work email</label><input id="quote-email" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required /></div>
                <div><label htmlFor="quote-phone">Phone number</label><input id="quote-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" inputMode="tel" pattern="[0-9+ -]{10,15}" required /></div>
              </div>
              <label htmlFor="quote-location">Delivery city</label>
              <input id="quote-location" name="location" value={formData.location} onChange={handleChange} autoComplete="address-level2" required />
            </div>
          )}

          <div className="quote-actions">
            {step > 1 && <button type="button" className="quote-back" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={16} /> Back</button>}
            <button type="submit" className="enquiry-submit-btn" disabled={submitting || (step < 3 && !canContinue)}>{submitting ? "Sending…" : step === 3 ? "Submit request" : "Continue"} {!submitting && <ArrowRight size={16} />}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
