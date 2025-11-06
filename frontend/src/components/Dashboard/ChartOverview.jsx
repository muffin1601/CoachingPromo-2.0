import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartOverview = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [1200, 1600, 1400, 1800, 2200, 2000, 2400],
        borderColor: "var(--brand-blue)",
        fill: false,
        tension: 0.4,
        pointBackgroundColor: "var(--brand-orange)",
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: "#eee" } },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="glass-card">
      <h3 style={{ color: "var(--brand-blue)", marginBottom: "10px" }}>
        Weekly Visitors
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartOverview;

const css = `
.chart-container {
  width: 100%;
}

.chart-container h3 {
  color: var(--brand-blue);
  margin-bottom: 15px;
}
`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);