import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import DashboardFooter from "../../components/Dashboard/DashboardFooter";
import OrderManager from "../../components/Dashboard/OrderManager";

const OrderManagerPage = () => {
  return (
    <div className="admin-dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <OrderManager />
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default OrderManagerPage;
