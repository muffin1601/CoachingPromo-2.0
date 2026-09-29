const app = require('./app');
const mongoose = require('mongoose');
async function start() {
  if (!process.env.MONGO_URI || !process.env.JWT_SECRET) throw new Error('MONGO_URI and JWT_SECRET are required');
  await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
  const server = app.listen(Number(process.env.PORT || 5001), () => console.log(`Next.js backend listening on ${process.env.PORT || 5001}; MongoDB connected`));
  server.on('error', async error => { console.error('Backend listen failed:', error.code); await mongoose.disconnect(); process.exitCode = 1; });
  const shutdown = () => server.close(async () => { await mongoose.disconnect(); process.exit(0); });
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
  return server;
}
if (require.main === module) start().catch(error => { console.error('Backend startup failed:', error.name); process.exitCode = 1; });
module.exports = { start };
