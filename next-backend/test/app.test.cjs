const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
// Tests make no database connection and send no emails or payments.
process.env.RESEND_API_KEY ||= 're_test_placeholder';
const app = require('../app');
let server, base;
before(async () => {
  server = await new Promise(resolve => { const instance = app.listen(0, '127.0.0.1', () => resolve(instance)); });
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise(resolve => server.close(resolve)));
test('identifies the dedicated service', async () => {
  const response = await fetch(`${base}/health`);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).service, 'coachingpromo-next-backend');
});
test('readiness fails without a database connection', async () => {
  assert.equal((await fetch(`${base}/ready`)).status, 503);
});
test('does not serve the React SPA on unknown routes', async () => {
  const response = await fetch(`${base}/about`);
  assert.equal(response.status, 404);
  assert.match(response.headers.get('content-type'), /application\/json/);
});
test('order API still requires authentication', async () => {
  assert.equal((await fetch(`${base}/api/orders`)).status, 401);
});
test('CORS allows Next and excludes unrelated origins', async () => {
  const allowedOrigin = (process.env.CORS_ORIGINS || process.env.FRONTEND_URL).split(',')[0].trim();
  const yes = await fetch(`${base}/health`, { headers: { Origin: allowedOrigin } });
  assert.equal(yes.headers.get('access-control-allow-origin'), allowedOrigin);
  const no = await fetch(`${base}/health`, { headers: { Origin: 'https://unrelated.invalid' } });
  assert.equal(no.headers.get('access-control-allow-origin'), null);
});
