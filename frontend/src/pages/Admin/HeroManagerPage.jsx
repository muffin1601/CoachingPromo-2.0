import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";


import DashboardFooter from "../../components/Dashboard/DashboardFooter";

import HeroManager from "../../components/Dashboard/HeroManager";



const HeroManagerPage = () => {
  return (
    <div className="admin-dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <HeroManager />
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default HeroManagerPage;


const css = `
:root {
  --brand-blue: #0b4a8d;
  --brand-orange: #d17504;
  --neutral-gray: #555;
  --light-border: #e4e4e4;
  --light-bg: #fafafa;

  --glass-bg: rgba(255, 255, 255, 0.25);
  --glass-border: rgba(255, 255, 255, 0.3);
  --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.admin-dashboard-layout {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f4f7fb 0%, #e6edf5 100%);
}

.main-content {
  flex-grow: 1;
  padding-left: 260px;
  display: flex;
  flex-direction: column;
  transition: padding-left 0.3s ease-in-out;
}

.dashboard-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-grow: 1;
  background: url('https://images.pexels.com/photos/4067756/pexels-photo-4067756.jpeg')
    no-repeat center/cover;
}

.dashboard-row {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: var(--shadow-soft);
  padding: 25px;
  flex: 1;
  min-width: 300px;
  color: var(--neutral-gray);
  transition: all 0.3s ease-in-out;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.admin-btn {
  background: var(--brand-orange);
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.admin-btn:hover {
  background: #e28400;
}

.dashboard-footer {
  padding: 15px;
  text-align: center;
  background: var(--brand-blue);
  color: white;
  font-size: 0.85rem;
}

@media (max-width: 992px) {
  .main-content {
    padding-left: 0;
  }:root {
  --brand-blue: #0b4a8d;
  --brand-orange: #d17504;
  --neutral-gray: #555;
  --light-border: #e4e4e4;
  --light-bg: #fafafa;

  --glass-bg: rgba(255, 255, 255, 0.25);
  --glass-border: rgba(255, 255, 255, 0.3);
  --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.admin-dashboard-layout {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f4f7fb 0%, #e6edf5 100%);
}

.main-content {
  flex-grow: 1;
  padding-left: 260px;
  display: flex;
  flex-direction: column;
  transition: padding-left 0.3s ease-in-out;
}

.dashboard-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-grow: 1;
  background: url('https://images.pexels.com/photos/4067756/pexels-photo-4067756.jpeg')
    no-repeat center/cover;
}

.dashboard-row {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: var(--shadow-soft);
  padding: 25px;
  flex: 1;
  min-width: 300px;
  color: var(--neutral-gray);
  transition: all 0.3s ease-in-out;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.admin-btn {
  background: var(--brand-orange);
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.admin-btn:hover {
  background: #e28400;
}

.dashboard-footer {
  padding: 15px;
  text-align: center;
  background: var(--brand-blue);
  color: white;
  font-size: 0.85rem;
}

@media (max-width: 992px) {
  .main-content {
    padding-left: 0;
  }
  .dashboard-row {
    flex-direction: column;
  }
}

`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);