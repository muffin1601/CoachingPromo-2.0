import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="ap-modal-overlay" onClick={onClose}>
      <div className="ap-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="ap-modal-header">
          <h3 className="ap-modal-title">{title}</h3>
          <button className="ap-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="ap-modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;


const css = `
:root {
  --brand-blue: #0b4a8d;
  --brand-orange: #d17504;
  --neutral-gray: #555;
  --light-border: #e4e4e4;
  --light-bg: #fafafa;
}

/* --- Modal Overlay --- */
.ap-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

/* --- Modal Box --- */
/* --- Modal Box --- */
.ap-modal-box {
  background: #fff;
  width: 98%;
  max-width: 700px;

  max-height: 90vh;        /* LIMIT HEIGHT */
  display: flex;
  flex-direction: column;  /* Keep header fixed, content scrollable */

  overflow: hidden;
  animation: apFadeIn 0.25s ease-out;
  border: 1px solid var(--light-border);
}

/* --- Modal Content --- */
.ap-modal-content {
  padding: 22px;
  background: white;

  overflow-y: auto;       /* ENABLE SCROLL */
  flex-grow: 1;           /* Fill remaining height */
}


/* --- Modal Header --- */
.ap-modal-header {
  background: var(--brand-blue);
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ap-modal-title {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}

/* --- Close Button --- */
.ap-close-btn {
  font-size: 22px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.ap-close-btn:hover {
  color: var(--brand-orange);
}

/* --- Modal Content --- */
.ap-modal-content {
  padding: 22px;
  background: white;
}

@keyframes apFadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);