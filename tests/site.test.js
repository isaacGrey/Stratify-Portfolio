import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(root, path), 'utf8');
const catalog = read('src/data/portfolio.js');
const team = read('src/sections/Team.jsx');

test('every referenced local project image exists', () => {
  const paths = [...catalog.matchAll(/(?:cover|src):\s*["'](\/projects\/[^"']+)["']/g)].map((match) => match[1]);
  assert.ok(paths.length >= 6, 'Expected covers and screenshots');
  for (const asset of paths) assert.ok(existsSync(join(root, 'public', asset.slice(1))), `Missing: ${asset}`);
});

test('project identifiers are unique and JuanCast has website and Google Play links', () => {
  const numbers = [...catalog.matchAll(/number: ["'](\d+)["']/g)].map((match) => match[1]);
  assert.equal(numbers.length, 8);
  assert.equal(new Set(numbers).size, numbers.length);
  assert.match(catalog, /href: "https:\/\/juancast\.ph\/"/);
  assert.match(catalog, /playStoreHref: "https:\/\/play\.google\.com\/store\/apps\/details\?id=/);
});

test('every team member photo exists', () => {
  const photos = [...team.matchAll(/photo: base \+ '([^']+)'/g)].map((match) => match[1]);
  assert.equal(photos.length, 4);
  for (const photo of photos) assert.ok(existsSync(join(root, 'public', photo)), `Missing: ${photo}`);
});

test('social preview has the correct dimensions and metadata', () => {
  const image = readFileSync(join(root, 'public/og-preview.png'));
  assert.equal(image.subarray(1, 4).toString(), 'PNG');
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
  const html = read('index.html');
  assert.match(html, /property="og:image"/);
  assert.match(html, /name="twitter:image"/);
  assert.match(html, /property="og:image:alt"/);
});

test('portfolio is light-only with no theme-switching wiring', () => {
  assert.doesNotMatch(read('index.html'), /data-theme=/);
  assert.doesNotMatch(read('src/index.css'), /data-theme|color-scheme:\s*dark/);
  assert.doesNotMatch(read('src/hooks/usePortfolioUI.js'), /useTheme|THEME_KEY/);
  assert.doesNotMatch(read('src/App.jsx'), /ThemeToggle|useTheme/);
});

test('team stays available in the codebase but is hidden from public navigation and the page', () => {
  const app = read('src/App.jsx');
  assert.match(catalog, /export const showTeamSection = false;/);
  assert.match(catalog, /\.\.\.\(showTeamSection \? \[\{ id: 'team'/);
  assert.match(app, /\{showTeamSection && <Team \/>\}/);
  assert.match(team, /export default function Team\(\)/);
});

test('AccountingSuite and AutoCount are listed as professional work without invented demos', () => {
  assert.match(catalog, /title: "AccountingSuite"/);
  assert.match(catalog, /title: "AutoCount"/);
  assert.match(catalog, /Business-specific AccountingSuite extensions/);
  assert.match(catalog, /Hands-on customer support and business-specific AutoCount customizations/);
  assert.match(catalog, /cover: "\/projects\/accountingsuite\/accountingsuite-cover.webp"/);
  assert.match(catalog, /cover: "\/projects\/autocount\/autocount-cover.webp"/);
});
