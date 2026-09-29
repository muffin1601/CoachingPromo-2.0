// Read-only backup of source, media, credentials and both configured databases.
// Run from the repository root: node next-backend/scripts/backup-migration.cjs
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { MongoClient, BSON } = require('mongodb');
const dotenv = require('dotenv');
const root = path.resolve(__dirname, '../..');
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const destination = path.join(root, '.migration-backups', stamp);
const ignored = new Set(['node_modules', '.git', '.next', '.next-dev', 'dist', 'dist-ssr']);
const digest = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
async function exists(file) {
  try { await fs.access(file); return true; }
  catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}
async function main() {
  await fs.mkdir(destination, { recursive: true, mode: 0o700 });
  const manifest = { created: new Date().toISOString(), excluded: [...ignored], files: [], databases: [], pointInTimeSnapshot: false };
  async function copy(source, target, relative) {
    await fs.mkdir(target, { recursive: true });
    for (const item of await fs.readdir(source, { withFileTypes: true })) {
      if (ignored.has(item.name)) continue;
      if (item.isSymbolicLink()) throw new Error('Backup does not follow symbolic links');
      const from = path.join(source, item.name), to = path.join(target, item.name), rel = path.join(relative, item.name);
      if (item.isDirectory()) { await copy(from, to, rel); continue; }
      const bytes = await fs.readFile(from);
      await fs.writeFile(to, bytes, { flag: 'wx', mode: 0o600 });
      const hash = digest(bytes);
      if (digest(await fs.readFile(to)) !== hash) throw new Error('Backup checksum mismatch');
      manifest.files.push({ path: rel, bytes: bytes.length, sha256: hash });
    }
  }
  for (const folder of ['frontend', 'backend', 'next-frontend', 'next-backend']) {
    if (!await exists(path.join(root, folder))) continue;
    await copy(path.join(root, folder), path.join(destination, folder), folder);
  }
  await fs.writeFile(path.join(destination, 'manifest.json'), JSON.stringify(manifest, null, 2), { mode: 0o600 });
  console.log(`Verified ${manifest.files.length} backed-up files (including uploads and environment files).`);
  const seen = new Set();
  for (const folder of ['backend', 'next-backend']) {
    if (!await exists(path.join(root, folder, '.env'))) continue;
    const settings = dotenv.parse(await fs.readFile(path.join(root, folder, '.env')));
    const uri = settings.MONGO_URI;
    if (!uri) { manifest.databases.push({ source: folder, status: 'missing configuration' }); continue; }
    if (seen.has(uri)) { manifest.databases.push({ source: folder, status: 'same connection already exported' }); continue; }
    seen.add(uri);
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 15000 });
    const entry = { source: folder, status: 'incomplete', collections: [] };
    manifest.databases.push(entry);
    try {
      await client.connect();
      const db = client.db();
      const directory = path.join(destination, 'mongodb', folder);
      await fs.mkdir(directory, { recursive: true, mode: 0o700 });
      const collections = await db.listCollections().toArray();
      for (const [index, info] of collections.entries()) {
        if (info.type === 'view') { entry.collections.push({ name: info.name, type: 'view', options: info.options }); continue; }
        const file = `${index}.ejsonl`, output = await fs.open(path.join(directory, file), 'wx', 0o600);
        let count = 0;
        try {
          for await (const doc of db.collection(info.name).find({})) {
            await output.write(BSON.EJSON.stringify(doc, { relaxed: false }) + '\n');
            count++;
          }
        } finally { await output.close(); }
        const bytes = await fs.readFile(path.join(directory, file));
        const lines = bytes.toString('utf8').trim().split('\n').filter(Boolean);
        if (lines.length !== count) throw new Error('Export count mismatch');
        for (const line of lines) BSON.EJSON.parse(line, { relaxed: false });
        entry.collections.push({ name: info.name, file, count, sha256: digest(bytes), options: info.options, indexes: await db.collection(info.name).indexes() });
      }
      entry.status = 'exported and parsed';
      console.log(`Database export for ${folder}: ${entry.collections.length} collections; EJSON validated.`);
    } catch (error) {
      entry.status = `FAILED: ${error.name}`;
      console.log(`Database export for ${folder} failed (${error.name}); file backups are retained.`);
      process.exitCode = 1;
    } finally {
      await client.close();
      await fs.writeFile(path.join(destination, 'manifest.json'), JSON.stringify(manifest, null, 2), { mode: 0o600 });
    }
  }
  await fs.writeFile(path.join(destination, 'manifest.json'), JSON.stringify(manifest, null, 2), { mode: 0o600 });
  console.log(`Private backup: ${destination}`);
}
main().catch(error => { console.error(`Backup failed (${error.name}); originals are unchanged.`); process.exitCode = 1; });
