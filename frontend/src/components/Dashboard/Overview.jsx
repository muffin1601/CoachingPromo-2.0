import React, { useEffect, useState } from "react";
import axios from "axios";
import { Package, Layers, Eye, Image } from "lucide-react";

const Overview = () => {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    visitors: 0,
    slides: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/stats`);
        setStats(res.data);
      } catch (error) {
        console.log("Error fetching stats", error);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      label: "Total Products",
      value: stats.products,
      icon: <Package />,
      color: "var(--brand-blue)"
    },
    {
      label: "Categories",
      value: stats.categories,
      icon: <Layers />,
      color: "var(--brand-orange)"
    },
    {
      label: "Total Visitors",
      value: stats.visitors,
      icon: <Eye />,
      color: "#6366f1"
    },
    {
      label: "Total Slides",
      value: stats.slides,
      icon: <Image />,
      color: "#0d9488"
    }
  ];

  return (
    <div className="overview-section">
      <div className="overview-header">
        <h2>Welcome back, Admin 👋</h2>
        <p>Here’s a quick look at your site’s Management.</p>
      </div>

      <div className="overview-grid">
        {cards.map((item, index) => (
          <div key={index} className="overview-card">
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

/* Grid for cards (Fixed 2x2 layout) */
.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* exactly 2 columns */
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