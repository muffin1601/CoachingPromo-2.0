const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../models/order");
const { protect } = require("../middleware/authMiddleware");

// @desc    Create Razorpay Order
// @route   POST /api/payment/create-order
// @access  Private
router.post("/create-order", protect, async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100, // amount in smallest currency unit
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// @desc    Verify Razorpay Payment
// @route   POST /api/payment/verify
// @access  Private
router.post("/verify", protect, async (req, res) => {
  try {
    // getting the details back from our font-end
    const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
        dbOrderId,
    } = req.body;

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");

    // comparing our digest with the actual signature
    if (digest !== razorpaySignature)
        return res.status(400).json({ msg: "Transaction not legit!" });

    // Update the database order as Paid
    const order = await Order.findById(dbOrderId);
    if(order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: razorpayPaymentId,
            status: "Completed",
            update_time: Date.now().toString(),
            email_address: req.user.email,
        };
        await order.save();
    }

    res.json({
        msg: "success",
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// @desc    Get Razorpay Key for Frontend
// @route   GET /api/payment/razorpay-key
// @access  Private
router.get("/razorpay-key", protect, (req, res) => {
    res.json({ key: process.env.RAZORPAY_KEY_ID });
});

module.exports = router;
