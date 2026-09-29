import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import DashboardFooter from "../../components/Dashboard/DashboardFooter";
import BlogManager from "../../components/Dashboard/BlogManager";

const BlogManagerPage = () => {
  return (
    <div className="admin-dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-2">
          <BlogManager />
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default BlogManagerPage;


import "./BlogManagerPage.jsx.css";
