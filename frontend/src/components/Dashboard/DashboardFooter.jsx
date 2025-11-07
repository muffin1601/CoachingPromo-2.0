import React from "react";


const DashboardFooter = () => {
  return (
    <footer className="dashboard-footer">
      © {new Date().getFullYear()} CoachingPromo | All Rights Reserved .
    </footer>
  );
};

export default DashboardFooter;

const css = `
.dashboard-footer {
  padding: 15px;
  text-align: center;
  background: var(--brand-blue);
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}
`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);