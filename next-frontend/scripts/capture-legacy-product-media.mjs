// Capture public legacy product media into versioned Next assets without changing MongoDB.
// Usage: node next-frontend/scripts/capture-legacy-product-media.mjs <verified-backup-directory>
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const backup = path.resolve(process.argv[2] || '');
const manifest = JSON.parse(await readFile(path.join(backup, 'manifest.json'), 'utf8'));
const database = manifest.databases.find(entry => entry.status === 'exported and parsed');
const products = database?.collections.find(entry => entry.name === 'products');
if (!database || !products) throw new Error('Verified product backup required');
const lines = (await readFile(path.join(backup, 'mongodb', database.source, products.file), 'utf8')).split(/\r?\n/).filter(Boolean);
const output = path.join(root, 'next-frontend', 'public', 'assets', 'migrated-products');
await mkdir(output, { recursive: true });
const media = new Map();
for (const line of lines) {
  const product = JSON.parse(line);
  for (const item of [...(product.images || []), ...(product.subImages || [])]) {
    const value = item?.url;
    if (typeof value !== 'string') continue;
    const url = new URL(value, 'https://www.coachingpromo.in');
    if (url.origin !== 'http://coachingpromo.in' || !url.pathname.startsWith('/uploads/products/')) continue;
    const filename = path.posix.basename(url.pathname);
    if (!/^\d+\.(webp|mp4)$/.test(filename)) throw new Error(`Unexpected legacy filename: ${filename}`);
    media.set(filename, `https://www.coachingpromo.in${url.pathname}`);
  }
}

const entries = [...media].sort(([a], [b]) => a.localeCompare(b));
let index = 0;
const results = [];
async function worker() {
  while (index < entries.length) {
    const [filename, source] = entries[index++];
    const response = await fetch(source, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error(`Media ${filename} returned ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (!bytes.length || bytes.length > 20 * 1024 * 1024) throw new Error(`Invalid media size: ${filename}`);
    const isWebp = filename.endsWith('.webp') && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
    const isMp4 = filename.endsWith('.mp4') && bytes.toString('ascii', 4, 8) === 'ftyp';
    if (!isWebp && !isMp4) throw new Error(`Invalid media format: ${filename}`);
    const destination = path.join(output, filename);
    try { await writeFile(destination, bytes, { flag: 'wx' }); }
    catch (error) {
      if (error.code !== 'EEXIST') throw error;
      const existing = await readFile(destination);
      if (!existing.equals(bytes)) throw new Error(`Existing copy differs: ${filename}`);
    }
    results.push({ filename, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') });
  }
}
await Promise.all(Array.from({ length: Math.min(4, entries.length) }, worker));
console.log(`Verified ${results.length} legacy media files in next-frontend/public/assets/migrated-products`);
