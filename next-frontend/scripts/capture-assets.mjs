// Explicitly refresh the integrity baseline after intentional public asset changes.
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = {};
async function walk(relative = '') {
  for (const entry of await readdir(path.join(root, 'public', relative), { withFileTypes: true })) {
    const file = path.posix.join(relative, entry.name);
    if (entry.isDirectory()) await walk(file);
    else manifest[file] = createHash('sha256').update(await readFile(path.join(root, 'public', file))).digest('hex');
  }
}
await walk();
await writeFile(path.join(root, 'asset-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Recorded ${Object.keys(manifest).length} asset hashes.`);
