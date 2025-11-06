import React from "react";

const TableView = ({ columns, data, onEdit, onDelete }) => (
  <table className="admin-table">
    <thead>
      <tr>
        {columns.map((col, i) => (
          <th key={i}>{col}</th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.length === 0 ? (
        <tr>
          <td colSpan={columns.length + 1} style={{ textAlign: "center" }}>
            No records found
          </td>
        </tr>
      ) : (
        data.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((val, idx) => (
              <td key={idx}>{String(val)}</td>
            ))}
            <td>
              <button onClick={() => onEdit(row)} className="edit-btn">Edit</button>
              <button onClick={() => onDelete(row._id)} className="delete-btn">Delete</button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
);

export default TableView;

const css =    `
.admin-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.admin-table th, .admin-table td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--light-border);
}

.admin-table th {
  background: var(--brand-blue);
  color: white;
  text-align: left;
}

.edit-btn, .delete-btn {
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  margin: 0 5px;
  cursor: pointer;
  color: white;
}

.edit-btn {
  background: var(--brand-orange);
}

.delete-btn {
  background: crimson;
}
;`
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);