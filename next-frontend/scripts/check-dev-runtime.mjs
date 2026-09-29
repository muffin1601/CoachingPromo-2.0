// Read-only check of SSR and emitted development chunks; no browser is required.
import assert from 'node:assert/strict';
const origin = process.env.DEV_CHECK_URL || 'http://127.0.0.1:3110';
for (const route of ['/', '/about', '/login']) {
  const response = await fetch(`${origin}${route}`);
  assert.equal(response.status, 200, `${route}: HTTP failure`);
  const html = await response.text();
  assert(!/bis_skin_checked|bis_register|__processed_/.test(html), 'Extension attributes present in server output');
  const digests = [...html.matchAll(/data-dgst="([^"]+)"/g)].map(match => match[1]);
  assert(digests.every(digest => digest === 'BAILOUT_TO_CLIENT_SIDE_RENDERING'), `${route}: server render failed: ${digests}`);
  const chunks = [...new Set([...html.matchAll(/<script[^>]+src="([^" ]+)"/g)]
    .map(match => match[1].replaceAll('&amp;', '&')).filter(src => src.startsWith('/_next/')))];
  assert(chunks.length > 0, 'No Next client chunks were emitted');
  for (const chunk of chunks) {
    const script = await fetch(new URL(chunk, origin));
    assert.equal(script.status, 200, `Unavailable client chunk: ${chunk}`);
    assert.match(script.headers.get('content-type'), /javascript/, `Invalid client chunk: ${chunk}`);
  }
  console.log(`${route}: server HTML and ${chunks.length} client chunks OK`);
}
