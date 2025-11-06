import React from "react";
import { Package, Plus } from "lucide-react";

const SubcategoryManager = () => {
  return (
    <div className="glass-card">
      <div className="card-header">
        <h3><Package size={18}/> Subcategory Manager</h3>
        <button className="admin-btn"><Plus size={16}/> Add Subcategory</button>
      </div>
      <p>Manage subcategories under categories.</p>
      <ul>
        <li>• Polo T-Shirts (T-Shirts)</li>
        <li>• Coffee Mugs (Mugs)</li>
      </ul>
    </div>
  );
};

export default SubcategoryManager;
const css = `
.glass-card {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--light-border);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}   
.card-header h3 {
    color: var(--brand-blue);
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
}
.admin-btn {
    background: var(--brand-orange);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;    
}
`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);