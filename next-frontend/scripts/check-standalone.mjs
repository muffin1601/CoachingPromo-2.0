// Creates a fresh isolated copy containing only the Next app pair.
// Originals are never renamed, moved or deleted. No dependency/build cache is copied.
import { cp, mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const destination = path.join(root, '.standalone-checks', new Date().toISOString().replace(/[:.]/g, '-'));
const exclude = new Set(['node_modules', '.next', '.next-dev', '.git', 'dist']);
const results = { directory: destination, originalFoldersPresent: false, steps: [] };
await mkdir(destination, { recursive: true });
for (const name of ['next-frontend', 'next-backend']) {
  await cp(path.join(root, name), path.join(destination, name), { recursive: true, filter: source => !exclude.has(path.basename(source)) });
}
for (const name of ['frontend', 'backend']) {
  try { await access(path.join(destination, name)); throw new Error(`Original folder unexpectedly present: ${name}`); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
}
console.log(`Isolated app pair: ${destination}`);
async function run(folder, args) {
  const command = `npm.cmd ${args.join(' ')}`;
  console.log(`${folder}: ${command}`);
  const code = await new Promise((resolve, reject) => {
    const child = spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', command], {
      cwd: path.join(destination, folder), stdio: 'inherit', windowsHide: true,
      env: { ...process.env, BACKEND_URL: 'http://127.0.0.1:5111' },
    });
    child.on('error', reject); child.on('exit', resolve);
  });
  results.steps.push({ folder, command, exitCode: code });
  await writeFile(path.join(destination, 'verification.json'), JSON.stringify(results, null, 2));
  if (code !== 0) throw new Error(`${folder} failed: ${command}`);
}
// Offline lockfile install; lifecycle scripts are disabled, then actual builds/tests run.
for (const name of ['next-frontend', 'next-backend']) await run(name, ['ci', '--offline', '--ignore-scripts', '--no-audit', '--no-fund']);
await run('next-frontend', ['run', 'verify:parity']);
await run('next-frontend', ['run', 'lint']);
await run('next-frontend', ['run', 'build']);
await run('next-backend', ['test']);
console.log('Standalone clean install, production build and backend boundary tests passed.');
