import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);

test('PWA manifest has standalone launch mode and launcher icons', async () => {
  const manifest = JSON.parse(await readFile(new URL('public/manifest.webmanifest', root), 'utf8'));
  assert.equal(manifest.name, 'AAKAASH ADHINAYAK');
  assert.equal(manifest.display, 'standalone');
  assert.ok(manifest.icons.some((icon) => icon.sizes === '192x192'));
  assert.ok(manifest.icons.some((icon) => icon.sizes === '512x512'));
});

test('service worker explicitly skips API response caching', async () => {
  const sw = await readFile(new URL('public/sw.js', root), 'utf8');
  assert.match(sw, /url\.pathname\.startsWith\('\/api\/'\)/);
  assert.match(sw, /self\.addEventListener\('install'/);
  assert.match(sw, /self\.addEventListener\('activate'/);
});

test('app registers service worker in production and links the manifest', async () => {
  const pwa = await readFile(new URL('src/pwa.ts', root), 'utf8');
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(pwa, /serviceWorker\.register/);
  assert.match(html, /rel="manifest" href="\/manifest\.webmanifest"/);
  await access(new URL('public/icons/icon-192.png', root));
  await access(new URL('public/icons/icon-512.png', root));
});
