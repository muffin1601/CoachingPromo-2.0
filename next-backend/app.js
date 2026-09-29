const path = require('node:path');
const fs = require('node:fs');
require('dotenv').config({ path: path.join(__dirname, '.env') });
// Existing upload handlers resolve paths from cwd. Anchor them to this app.
process.chdir(__dirname);
for (const dir of ['products', 'blogs', 'categories', 'subcategories', 'slides']) {
  fs.mkdirSync(path.join(__dirname, 'uploads', dir), { recursive: true });
}
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.disable('x-powered-by');
const allowedOrigins = new Set((process.env.CORS_ORIGINS || process.env.FRONTEND_URL || 'http://localhost:3000').split(',').map(value => value.trim()));
app.use(cors({ origin(origin, callback) { callback(null, !origin || allowedOrigins.has(origin)); } }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.get(['/health', '/api/health'], (req, res) => res.json({ service: 'coachingpromo-next-backend', status: 'ok' }));
app.get('/ready', (req, res) => {
  const ready = mongoose.connection.readyState === 1;
  res.status(ready ? 200 : 503).json({ service: 'coachingpromo-next-backend', database: ready ? 'connected' : 'unavailable' });
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const routes = [
  ['/api/blogs', 'blogRoutes'], ['/api/visitors', 'visitor'], ['/api/users', 'userRoutes'],
  ['/api/orders', 'orderRoutes'], ['/api/payment', 'paymentRoutes'], ['/api/leads', 'leadRoutes'],
  ['/api/categories', 'categoryRoutes'], ['/api/subcategories', 'subcategoryRoutes'],
  ['/api/products', 'productRoutes'], ['/api', 'emailRoutes'], ['/api', 'adminRoutes'],
  ['/api/slides', 'bannerRoutes'], ['/api/products-search', 'searchRoutes'],
  ['/api', 'instituteRoutes'], ['/api/admin', 'adminstatsRoutes'], ['/', 'sitemap'],
];
for (const [prefix, module] of routes) app.use(prefix, require(`./routes/${module}`));
// Next owns HTML rendering and public page routes. This service returns JSON errors.
app.use((req, res) => res.status(404).json({ message: 'API endpoint not found' }));
app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  const status = error.status || 500;
  res.status(status).json({ message: status < 500 ? error.message : 'Internal server error' });
});
module.exports = app;
