import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageBanner from "../components/PageBanner";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    institutionName: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    mobile: "",
  });

  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "India",
    mobile: "",
  });

  const [hasGst, setHasGst] = useState(false);
  const [gstNumber, setGstNumber] = useState("");
  const [shipToDifferent, setShipToDifferent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
  ];

  React.useEffect(() => {
    if (user) {
      setBillingDetails({
        fullName: user.billingDetails?.fullName || user.name || "",
        institutionName: user.billingDetails?.institutionName || "",
        address: user.billingDetails?.address || "",
        pinCode: user.billingDetails?.pinCode || "",
        city: user.billingDetails?.city || "",
        state: user.billingDetails?.state || "",
        mobile: user.billingDetails?.mobile || "",
      });
      setHasGst(!!user.gstNumber);
      setGstNumber(user.gstNumber || "");
      
      if (user.shippingDetails) {
        setShippingAddress({
          address: user.shippingDetails.address || "",
          city: user.shippingDetails.city || "",
          postalCode: user.shippingDetails.pinCode || "",
          country: "India",
          mobile: user.shippingDetails.mobile || "",
        });
      }
    }
  }, [user]);



  if (!user) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Please log in to checkout</h2>
        <button onClick={() => navigate("/login")} style={{ padding: "10px 20px", marginTop: "20px" }}>Log In</button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  const itemsPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const taxPrice = Number((0.18 * itemsPrice).toFixed(2)); // Assuming 18% GST standard
  const shippingPrice = itemsPrice > 1000 ? 0 : 50; // Free over 1000
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlaceOrder = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const finalShippingAddress = shipToDifferent ? shippingAddress : {
        address: billingDetails.address,
        city: billingDetails.city,
        postalCode: billingDetails.pinCode,
        country: "India",
        mobile: billingDetails.mobile,
        state: billingDetails.state,
      };

      const orderData = {
        orderItems: cartItems,
        shippingAddress: finalShippingAddress,
        billingDetails,
        gstNumber: hasGst ? gstNumber : "",
        paymentMethod: "Razorpay",
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      };

      const { data: dbOrder } = await axios.post(`${import.meta.env.VITE_API_BASE_URL || ""}/api/orders`, orderData, config);

      const res = await loadRazorpayScript();
      if (!res) {
        setError("Razorpay SDK failed to load. Are you online?");
        setLoading(false);
        return;
      }

      const { data: orderParams } = await axios.post(`${import.meta.env.VITE_API_BASE_URL || ""}/api/payment/create-order`, { amount: totalPrice }, config);
      const { data: keyObj } = await axios.get(`${import.meta.env.VITE_API_BASE_URL || ""}/api/payment/razorpay-key`, config);

      const options = {
        key: keyObj.key,
        amount: orderParams.amount,
        currency: orderParams.currency,
        name: "CoachingPromo",
        description: "Promotional Order Payment",
        order_id: orderParams.id,
        handler: async function (response) {
          try {
            const verifyData = {
              orderCreationId: orderParams.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              dbOrderId: dbOrder._id,
            };
            const verifyRes = await axios.post(`${import.meta.env.VITE_API_BASE_URL || ""}/api/payment/verify`, verifyData, config);

            if (verifyRes.data.msg === "success") {
              clearCart();
              navigate("/"); 
            } else {
              setError("Payment verification failed.");
            }
          } catch (verErr) {
            setError(verErr.response?.data?.msg || "Payment verification failed.");
          }
        },
        prefill: {
          name: billingDetails.fullName || user.name,
          email: user.email,
          contact: billingDetails.mobile
        },
        theme: {
          color: "#4facfe",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBillingChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageBanner
        title="Checkout"
        background="/bags.webp"
        breadcrumb={[{ label: "Checkout" }]}
      />
      <div style={{ padding: "60px 20px 80px", maxWidth: "1200px", margin: "0 auto", minHeight: "50vh" }}>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>
        
        {/* Billing & Shipping Form Left */}
        <div style={{ flex: "1 1 60%", background: "white", padding: "30px", borderRadius: "0", boxShadow: "var(--shadow-soft)", border: "1px solid var(--light-border)" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "20px" }}>Billing Details</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Full Name</label>
                <input type="text" name="fullName" value={billingDetails.fullName} onChange={handleBillingChange} required placeholder="John Doe" style={inputStyle} />
              </div>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Institution/Company Name</label>
                <input type="text" name="institutionName" value={billingDetails.institutionName} onChange={handleBillingChange} placeholder="ABC Corp" style={inputStyle} />
              </div>
            </div>

            <div style={inputContainerStyle}>
              <label style={labelStyle}>Address</label>
              <input type="text" name="address" value={billingDetails.address} onChange={handleBillingChange} required placeholder="123 Street Name" style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Pin Code</label>
                <input type="text" name="pinCode" value={billingDetails.pinCode} onChange={handleBillingChange} required placeholder="110001" style={inputStyle} />
              </div>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>City/Town</label>
                <input type="text" name="city" value={billingDetails.city} onChange={handleBillingChange} required placeholder="New Delhi" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>State</label>
                <select name="state" value={billingDetails.state} onChange={handleBillingChange} required style={inputStyle}>
                  <option value="">Select State</option>
                  {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Mobile No</label>
                <input type="text" name="mobile" value={billingDetails.mobile} onChange={handleBillingChange} required placeholder="+91-xxxxxxx" style={inputStyle} />
              </div>
            </div>

            {/* GST */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
              <input type="checkbox" id="hasGst" checked={hasGst} onChange={(e) => setHasGst(e.target.checked)} />
              <label htmlFor="hasGst" style={{ fontWeight: "500", cursor: "pointer" }}>Add GST Number</label>
            </div>
            {hasGst && (
              <div style={inputContainerStyle}>
                <input type="text" value={gstNumber} onChange={(e) => setGstNumber(e.target.value)} placeholder="Enter GST Number" style={inputStyle} />
              </div>
            )}

            {/* Ship to Different Address */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
              <input type="checkbox" id="shipToDifferent" checked={shipToDifferent} onChange={(e) => setShipToDifferent(e.target.checked)} />
              <label htmlFor="shipToDifferent" style={{ fontWeight: "600", color: "var(--brand-blue)", cursor: "pointer" }}>Ship to Different Address</label>
            </div>

            {shipToDifferent && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "10px" }}>
                <div style={inputContainerStyle}>
                  <label style={labelStyle}>Shipping Address</label>
                  <input type="text" name="address" value={shippingAddress.address} onChange={handleShippingChange} required placeholder="456 Other Street" style={inputStyle} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Pin Code</label>
                    <input type="text" name="postalCode" value={shippingAddress.postalCode} onChange={handleShippingChange} required placeholder="110002" style={inputStyle} />
                  </div>
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>City/Town</label>
                    <input type="text" name="city" value={shippingAddress.city} onChange={handleShippingChange} required placeholder="Mumbai" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>State</label>
                    <select name="state" value={shippingAddress.state} onChange={handleShippingChange} required style={inputStyle}>
                      <option value="">Select State</option>
                      {states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Mobile No</label>
                    <input type="text" name="mobile" value={shippingAddress.mobile} onChange={handleShippingChange} required placeholder="+91-xxxxxxx" style={inputStyle} />
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>


        {/* Order Summary Right */}
        <div style={{ flex: "1 1 35%", minWidth: "300px", background: "white", padding: "30px", borderRadius: "0", boxShadow: "var(--shadow-medium)", position: "sticky", top: "100px", border: "1px solid var(--brand-blue)" }}>
          <h3 style={{ margin: "0 0 20px 0", color: "var(--brand-blue)", fontSize: "1.5rem", borderBottom: "1px solid var(--light-border)", paddingBottom: "15px" }}>Order Summary</h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderBottom: "1px solid var(--light-border)", paddingBottom: "15px", marginBottom: "15px" }}>
            {cartItems.map((item, index) => (
              <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontSize: "0.95rem", color: "var(--text-dark)" }}>
                <span style={{ maxWidth: "70%", lineHeight: "1.4" }}>{item.name} <span style={{ color: "var(--neutral-light)" }}>(x{item.qty})</span></span>
                <span style={{ fontWeight: "500" }}>₹{item.qty * item.price}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "var(--neutral-gray)", fontSize: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Items Total:</span> <span>₹{itemsPrice}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Shipping:</span> <span style={{ color: shippingPrice === 0 ? "#52c41a" : "inherit" }}>{shippingPrice === 0 ? "FREE" : `₹${shippingPrice}`}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Tax (18% GST):</span> <span>₹{taxPrice}</span>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0", fontSize: "1.4rem", fontWeight: "bold", color: "var(--text-dark)", borderTop: "1px solid var(--light-border)", paddingTop: "15px" }}>
            <span>Total:</span> <span style={{ color: "var(--brand-orange)" }}>₹{totalPrice.toFixed(2)}</span>
          </div>
          
          {error && <div style={{ background: "#fff1f0", color: "#cf1322", padding: "10px 15px", borderRadius: "6px", border: "1px solid #ffa39e", marginBottom: "20px", fontSize: "0.9rem" }}>{error}</div>}
          
          <button 
            onClick={handlePlaceOrder}
            disabled={loading}
            style={{ width: "100%", padding: "15px", background: "var(--brand-orange)", color: "white", border: "none", borderRadius: "0", fontSize: "1.1rem", fontWeight: "600", cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 10px rgba(211, 84, 0, 0.3)", opacity: loading ? 0.7 : 1, transition: "background 0.2s" }}
            onMouseOver={(e) => { if (!loading) e.currentTarget.style.background = "var(--brand-orange-dark)" }}
            onMouseOut={(e) => { if (!loading) e.currentTarget.style.background = "var(--brand-orange)" }}
          >
            {loading ? "Initializing Secure Payment..." : "Pay with Razorpay"}
          </button>
          
          <div style={{ textAlign: "center", marginTop: "15px", fontSize: "0.8rem", color: "var(--neutral-light)", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
             <img src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg" alt="Razorpay" style={{ height: "18px", opacity: 0.6 }} /> Secure Payment Gateway
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const inputContainerStyle = { display: "flex", flexDirection: "column", gap: "6px" };
const labelStyle = { fontSize: "0.85rem", color: "var(--neutral-gray)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" };
const inputStyle = { padding: "10px 15px", width: "100%", border: "1px solid var(--medium-border)", borderRadius: "4px", fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s" };

export default Checkout;
