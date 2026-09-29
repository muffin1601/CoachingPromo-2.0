const express = require("express");
const router = express.Router();
const axios = require("axios");
const Visitor = require("../models/Visitor");

const getClientIp = (req) => {
  const xForwardedFor = req.headers["x-forwarded-for"];
  if (xForwardedFor) return xForwardedFor.split(",")[0].trim();
  return req.socket.remoteAddress;
};

router.get("/count", async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const userIp = getClientIp(req);
    const device = req.headers["user-agent"] || "Unknown";
    const visitorId = req.query.vid || null;

    console.log(`[Visitor Check] Date: ${today}, IP: ${userIp}, VID: ${visitorId}`);

    let visitor = await Visitor.findOne({ date: today });

    const isReturningVisitor = (vDoc) => {
      if (visitorId && visitorId !== "null" && visitorId !== "undefined") {
        const found = vDoc.visitors.some((v) => v.visitorId === visitorId);
        if (found) console.log(`[Visitor] Found existing VID: ${visitorId}`);
        return found;
      }
      const foundByIP = vDoc.visitors.some((v) => v.ip === userIp && v.device === device);
      if (foundByIP) console.log(`[Visitor] Found existing IP+Device: ${userIp}`);
      return foundByIP;
    };

    if (!visitor) {
      console.log(`[Visitor] Creating new record for today: ${today}`);
      let city = "Unknown";
      let region = "Unknown";

      if (userIp && userIp !== "::1" && userIp !== "127.0.0.1" && !userIp.startsWith("::ffff:127.0.0.1")) {
        try {
          const geoRes = await axios.get(`http://ip-api.com/json/${userIp}`);
          if (geoRes.data.status === "success") {
            city = geoRes.data.city || "Unknown";
            region = geoRes.data.regionName || "Unknown";
          }
        } catch (geoErr) {
          console.error("Geo lookup failed:", geoErr.message);
        }
      }

      const newVisitorData = { visitorId, ip: userIp, city, region, device, timestamp: new Date() };
      visitor = await Visitor.create({ date: today, count: 1, visitors: [newVisitorData] });
      console.log(`[Visitor] First visitor of the day counted.`);
    } else {
      if (!isReturningVisitor(visitor)) {
        console.log(`[Visitor] New unique visitor detected. Incrementing count.`);
        let city = "Unknown";
        let region = "Unknown";

        if (userIp && userIp !== "::1" && userIp !== "127.0.0.1" && !userIp.startsWith("::ffff:127.0.0.1")) {
          try {
            const geoRes = await axios.get(`http://ip-api.com/json/${userIp}`);
            if (geoRes.data.status === "success") {
              city = geoRes.data.city || "Unknown";
              region = geoRes.data.regionName || "Unknown";
            }
          } catch (geoErr) {}
        }

        const newVisitorData = { visitorId, ip: userIp, city, region, device, timestamp: new Date() };
        visitor.count++;
        visitor.visitors.push(newVisitorData);
        await visitor.save();
      } else {
        console.log(`[Visitor] Returning visitor. Count NOT incremented.`);
      }
    }

    // Return total visitors across all days using efficient aggregation
    const result = await Visitor.aggregate([
      { $group: { _id: null, total: { $sum: "$count" } } }
    ]);
    const totalCount = result.length > 0 ? result[0].total : 0;

    res.json({
      totalVisitors: totalCount,
    });
  } catch (error) {
    console.error("Visitor Count Error:", error);
    res.status(500).json({ error: "Failed to fetch visitor count" });
  }
});

module.exports = router;
