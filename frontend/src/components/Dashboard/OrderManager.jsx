import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderManager = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("userInfo")).token}`,
        },
      };
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL || ""}/api/orders`, config);
      setOrders(data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDeliver = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("userInfo")).token}`,
        },
      };
      await axios.put(`${import.meta.env.VITE_API_BASE_URL || ""}/api/orders/${id}/deliver`, {}, config);
      fetchOrders();
    } catch (err) {
      alert("Error marking as delivered");
    }
  };

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ background: "var(--glass-bg, #fff)", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
      <h2>Manage Orders</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "var(--brand-blue, #0b4a8d)", color: "white", textAlign: "left" }}>
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>USER</th>
            <th style={{ padding: "12px" }}>DATE</th>
            <th style={{ padding: "12px" }}>TOTAL</th>
            <th style={{ padding: "12px" }}>PAID</th>
            <th style={{ padding: "12px" }}>DELIVERED</th>
            <th style={{ padding: "12px" }}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "12px" }}>{order._id.substring(0, 10)}...</td>
              <td style={{ padding: "12px" }}>{order.user && order.user.name}</td>
              <td style={{ padding: "12px" }}>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td style={{ padding: "12px" }}>₹{order.totalPrice}</td>
              <td style={{ padding: "12px" }}>
                {order.isPaid ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>Yes ({new Date(order.paidAt).toLocaleDateString()})</span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>No</span>
                )}
              </td>
              <td style={{ padding: "12px" }}>
                {order.isDelivered ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>Yes ({new Date(order.deliveredAt).toLocaleDateString()})</span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>No</span>
                )}
              </td>
              <td style={{ padding: "12px" }}>
                {!order.isDelivered && (
                  <button 
                    onClick={() => handleDeliver(order._id)}
                    style={{ background: "var(--brand-orange, #d17504)", color: "white", padding: "6px 12px", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Mark Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManager;
