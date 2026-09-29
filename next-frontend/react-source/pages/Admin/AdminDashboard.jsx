import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import Overview from "../../components/Dashboard/Overview";

import DashboardFooter from "../../components/Dashboard/DashboardFooter";




const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <Overview />
          
          <div className="dashboard-row">
          
            </div>
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default AdminDashboard;



import "./AdminDashboard.jsx.css";
