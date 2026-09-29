// In-memory API contract checks. No MongoDB connection, email, payment or live user.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
process.env.JWT_SECRET = 'local-contract-test-only';
process.env.RESEND_API_KEY = 're_test_placeholder';
const app = require('../app');
const User = require('../models/user');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let server, base, user;
before(async () => {
  user = new User({ name: 'Local QA', email: 'qa@example.invalid', password: await bcrypt.hash('local-test-password', 4), role: 'user' });
  server = await new Promise(resolve => { const instance = app.listen(0, '127.0.0.1', () => resolve(instance)); });
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise(resolve => server.close(resolve)));
const token = () => jwt.sign({ id: user._id }, process.env.JWT_SECRET);
const post = (url, body, auth) => fetch(base + url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(auth ? { Authorization: `Bearer ${auth}` } : {}) }, body: JSON.stringify(body) });
test('login verifies password and returns a usable JWT without password fields', async t => {
  t.mock.method(User, 'findOne', async () => user);
  const response = await post('/api/users/login', { email: user.email, password: 'local-test-password' });
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.equal(jwt.verify(result.token, process.env.JWT_SECRET).id, String(user._id));
  assert.equal(result.password, undefined);
  assert.equal(result.role, 'user');
});
test('login rejects an incorrect password', async t => {
  t.mock.method(User, 'findOne', async () => user);
  assert.equal((await post('/api/users/login', { email: user.email, password: 'incorrect' })).status, 401);
});
test('checkout rejects an empty cart for an authenticated user', async t => {
  t.mock.method(User, 'findById', () => ({ select: async () => user }));
  assert.equal((await post('/api/orders', { orderItems: [] }, token())).status, 400);
});
test('non-admin users cannot read all orders', async t => {
  t.mock.method(User, 'findById', () => ({ select: async () => user }));
  const response = await fetch(base + '/api/orders', { headers: { Authorization: `Bearer ${token()}` } });
  assert.equal(response.status, 401);
});
test('admin order listing returns the model result', async t => {
  t.mock.method(User, 'findById', () => ({ select: async () => ({ _id: user._id, role: 'admin' }) }));
  t.mock.method(Order, 'find', () => ({ populate: async () => [{ _id: 'test-order' }] }));
  const response = await fetch(base + '/api/orders', { headers: { Authorization: `Bearer ${token()}` } });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), [{ _id: 'test-order' }]);
});
test('upload rejects an empty payload without writing a file', async () => {
  assert.equal((await post('/api/products/upload', {})).status, 400);
});
