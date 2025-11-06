import React from "react";
import { Package, Layers, Users, Eye } from "lucide-react";


const Overview = () => {
  const stats = [
    {
      label: "Total Products",
      value: "342",
      icon: <Package />,
      color: "var(--brand-blue)",
    },
    {
      label: "Categories",
      value: "24",
      icon: <Layers />,
      color: "var(--brand-orange)",
    },
    {
      label: "Total Orders",
      value: "179",
      icon: <Users />,
      color: "#0d9488", // teal accent
    },
    {
      label: "Monthly Visitors",
      value: "12.4K",
      icon: <Eye />,
      color: "#6366f1", // indigo accent
    },
  ];

  return (
    <div className="overview-section">
      <div className="overview-header">
        <h2>Welcome back, Admin 👋</h2>
        <p>Here’s a quick look at your site’s performance.</p>
      </div>

      <div className="overview-grid">
        {stats.map((item, i) => (
          <div key={i} className="overview-card glass-card">
            <div
              className="overview-icon"
              style={{ background: item.color + "22", color: item.color }}
            >
              {item.icon}
            </div>
            <div className="overview-info">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;


const css = `
.overview-section {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.overview-header h2 {
  color: var(--brand-blue);
  font-size: 1.8rem;
  font-weight: 700;
}

.overview-header p {
  color: var(--neutral-gray);
  opacity: 0.9;
  font-size: 1rem;
}

/* Grid for cards */
.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
}

/* Card styling */
.overview-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: var(--shadow-soft);
  padding: 20px;
  transition: 0.3s ease;
}

.overview-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.overview-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}

.overview-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.overview-info p {
  font-size: 0.9rem;
  color: var(--neutral-gray);
}

`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);