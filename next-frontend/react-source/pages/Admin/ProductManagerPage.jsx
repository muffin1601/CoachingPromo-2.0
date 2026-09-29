import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";


import DashboardFooter from "../../components/Dashboard/DashboardFooter";

import ProductManager from "../../components/Dashboard/ProductManager";



const ProductManagerPage = () => {
  return (
    <div className="admin-dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-2">
          <ProductManager />
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default ProductManagerPage;

const css =  `
.dashboard-2 {
 
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-grow: 1;
   background: linear-gradient(135deg, #f4f7fb 0%, #e6edf5 100%);
}
   ;`
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
  