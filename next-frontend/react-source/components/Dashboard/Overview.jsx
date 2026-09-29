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
        const res = await axios.get(`${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/admin/stats`);
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


import "./Overview.jsx.css";