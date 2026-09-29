import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";


import DashboardFooter from "../../components/Dashboard/DashboardFooter";

import SubcategoryManager from "../../components/Dashboard/SubcategoryManager";



const SubcategoryManagerPage = () => {
  return (
    <div className="admin-dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-2">
          <SubcategoryManager />
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default SubcategoryManagerPage;

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
  