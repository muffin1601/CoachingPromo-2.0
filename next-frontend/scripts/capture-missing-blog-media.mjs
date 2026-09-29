// Capture published blog images absent from the dedicated backend upload copy.
// Usage: node next-frontend/scripts/capture-missing-blog-media.mjs <verified-backup-directory>
import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const backup = path.resolve(process.argv[2] || '');
const manifest = JSON.parse(await readFile(path.join(backup, 'manifest.json'), 'utf8'));
const database = manifest.databases.find(entry => entry.status === 'exported and parsed');
const blogs = database?.collections.find(entry => entry.name === 'blogs');
if (!database || !blogs) throw new Error('Verified blog backup required');
const lines = (await readFile(path.join(backup, 'mongodb', database.source, blogs.file), 'utf8')).split(/\r?\n/).filter(Boolean);
const output = path.join(root, 'next-frontend', 'public', 'uploads', 'blogs');
await mkdir(output, { recursive: true });
const missing = new Set();
for (const line of lines) {
  const blog = JSON.parse(line);
  if (blog.status && blog.status !== 'published') continue;
  for (const raw of [blog.media, blog.featuredImage]) {
    if (!raw || typeof raw !== 'string') continue;
    const name = path.basename(raw);
    if (name !== raw || !/^[\w .,-]+\.(?:webp|png|jpe?g)$/i.test(name)) throw new Error(`Unexpected blog filename: ${raw}`);
    try { await access(path.join(root, 'next-backend', 'uploads', 'blogs', name)); }
    catch (error) { if (error.code === 'ENOENT') missing.add(name); else throw error; }
  }
}
for (const name of [...missing].sort()) {
  const response = await fetch(`https://www.coachingpromo.in/uploads/blogs/${encodeURIComponent(name)}`, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Blog image ${name} returned ${response.status}`);
  let bytes = Buffer.from(await response.arrayBuffer());
  if (!bytes.length || bytes.length > 20 * 1024 * 1024) throw new Error(`Invalid blog image size: ${name}`);
  let webp = name.endsWith('.webp') && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
  let png = name.endsWith('.png') && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  let jpeg = /\.jpe?g$/i.test(name) && bytes[0] === 0xff && bytes[1] === 0xd8;
  if (!webp && !png && !jpeg && response.headers.get('content-type')?.startsWith('image/')) {
    const format = name.endsWith('.png') ? 'png' : name.endsWith('.webp') ? 'webp' : 'jpeg';
    bytes = await sharp(bytes).toFormat(format).toBuffer();
    webp = format === 'webp'; png = format === 'png'; jpeg = format === 'jpeg';
  }
  if (!webp && !png && !jpeg) throw new Error(`Invalid blog image format: ${name}`);
  const destination = path.join(output, name);
  try { await writeFile(destination, bytes, { flag: 'wx' }); }
  catch (error) {
    if (error.code !== 'EEXIST') throw error;
    if (!(await readFile(destination)).equals(bytes)) throw new Error(`Existing blog copy differs: ${name}`);
  }
}
console.log(`Verified ${missing.size} missing blog media files in next-frontend/public/uploads/blogs`);
