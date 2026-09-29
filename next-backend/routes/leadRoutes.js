const express = require("express");
const router = express.Router();
const { Resend } = require('resend');
const Lead = require("../models/Lead");

const resend = new Resend(process.env.RESEND_API_KEY);


// @desc    Create a new lead (enquiry)
// @route   POST /api/leads
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, productInterest } = req.body;

    if (!name || !email || !mobile) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const lead = new Lead({
      name,
      email,
      mobile,
      productInterest,
    });

    const savedLead = await lead.save();
    console.log("New lead saved to DB:", savedLead._id);

    // 2. Send Email Notification
    try {
      if (process.env.RESEND_API_KEY) {
        console.log("Attempting to send email notification...");
        const emailRes = await resend.emails.send({
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO,
          subject: "New Offer Enquiry - CoachingPromo",
          text: `
            New lead captured from Special Offer Banner:
            
            Name: ${name}
            Email: ${email}
            Mobile: ${mobile}
            Interest: ${productInterest || "Special Offer"}
            
            Please follow up with the lead.
          `,
        });
        console.log("Email notification sent:", emailRes.id);
      } else {
        console.warn("RESEND_API_KEY missing, skipping email.");
      }
    } catch (emailErr) {
      console.error("Email notification failed:", emailErr.message);
    }

    res.status(201).json({ success: true, lead: savedLead });


  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// @desc    Get all leads (admin potentially)
// @route   GET /api/leads
// @access  Private/Admin
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
