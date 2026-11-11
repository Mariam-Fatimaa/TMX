// Builds public/demos/TMX-Portfolio.pdf — a two-page A4 overview of all
// projects in src/data/projects.json, using the images from `npm run covers`.
//
//   npm run portfolio
//
// Page 1: websites & online stores. Page 2: software, mobile apps, contact.
// Env: CHROME_PATH (browser binary), DEMO_BASE_URL (live demo link base)

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const out = path.join(root, "public", "demos", "TMX-Portfolio.pdf");
const imagesDir = path.join(root, "public", "Images", "projects");
const projects = JSON.parse(await fs.readFile(path.join(root, "src", "data", "projects.json"), "utf8"));

const SITE = "https://tmx-digital-solutions.vercel.app";
const BASE_URL = (process.env.DEMO_BASE_URL || `${SITE}/demos/`).replace(/\/?$/, "/");
const EMAIL = "hello@tmxdigitalsolutions.com";
const YEAR = new Date().getFullYear();

const executablePath = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
]
  .filter(Boolean)
  .find((p) => existsSync(p));
if (!executablePath) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const workDir = path.join(os.tmpdir(), "tmx-portfolio");
await fs.mkdir(workDir, { recursive: true });

// Chrome embeds WebP images uncompressed, so hand it small JPEGs instead
// (keeps the PDF around 1-2 MB, still sharp in print).
const thumbs = new Map();
async function prepare(dir, slug, width) {
  const file = path.join(imagesDir, dir, `${slug}.webp`);
  if (!existsSync(file)) throw new Error(`Missing ${path.relative(root, file)} — run: npm run covers -- ${slug}`);
  const jpg = path.join(workDir, `${dir}-${slug}.jpg`);
  await sharp(file).resize({ width }).flatten({ background: "#ffffff" }).jpeg({ quality: 82, mozjpeg: true }).toFile(jpg);
  thumbs.set(`${dir}/${slug}`, pathToFileURL(jpg).href);
}
const image = (dir, slug) => thumbs.get(`${dir}/${slug}`);

let n = 0;
const card = (p, dir) => `
  <a class="item" href="${esc(BASE_URL + p.slug + ".html")}">
    <img src="${image(dir, p.slug)}" alt="">
    <div class="meta"><span class="n">${String(++n).padStart(2, "0")}</span><span class="name">${esc(p.title)}</span><span class="type">${esc(p.type)}</span></div>
    <p>${esc(p.description)}</p>
  </a>`;

const web = projects.filter((p) => p.category === "Websites" || p.category === "E-commerce");
const saas = projects.filter((p) => p.category === "SaaS");
const mobile = projects.filter((p) => p.category === "Mobile Apps");

await Promise.all([
  ...[...web, ...saas].map((p) => prepare("wide", p.slug, 760)),
  ...mobile.map((p) => prepare("covers", p.slug, 420)),
]);

const top = (page) =>
  `<div class="top"><span>TMX Digital Solutions</span><span>Selected work, ${YEAR} · ${page} / 2</span></div>`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>TMX Digital Solutions — Selected work</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { background: #fff; }
  body { font: 400 9px/1.45 Inter, Helvetica, Arial, sans-serif; color: #111; }
  a { color: inherit; text-decoration: none; }
  .page { width: 210mm; height: 297mm; overflow: hidden; padding: 44px 46px 34px; display: flex; flex-direction: column; break-after: page; }
  .page:last-child { break-after: auto; }

  .top { display: flex; justify-content: space-between; font-size: 9px; padding-bottom: 9px; border-bottom: 1px solid #111; }
  .top span:last-child { color: #777; }

  .intro { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: end; padding: 26px 0 22px; }
  h1 { font-size: 32px; font-weight: 500; letter-spacing: -0.02em; line-height: 1.05; }
  .intro p { color: #555; font-size: 10px; max-width: 46ch; }

  h2 { display: flex; justify-content: space-between; align-items: baseline; font-size: 11px; font-weight: 600; padding: 20px 0 10px; }
  h2 span { font-weight: 400; color: #888; font-size: 9px; }
  .intro + h2 { padding-top: 0; }

  .grid { display: grid; gap: 18px 16px; }
  .g3 { grid-template-columns: repeat(3, 1fr); }
  .g5 { grid-template-columns: repeat(5, 1fr); gap: 18px 12px; }
  .item img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top; border: 0.5px solid #ddd; }
  .g5 .item img { aspect-ratio: 4 / 5; border: 0; }
  .meta { display: flex; align-items: baseline; gap: 6px; margin-top: 7px; padding-top: 5px; border-top: 0.5px solid #ddd; }
  .n { color: #999; font-size: 8px; font-variant-numeric: tabular-nums; }
  .name { font-weight: 600; font-size: 9.5px; white-space: nowrap; }
  .type { margin-left: auto; color: #888; font-size: 8px; text-align: right; }
  .g5 .type { display: none; }
  .item p { color: #555; margin-top: 2px; }

  .contact { margin-top: auto; display: grid; grid-template-columns: 1.3fr 1fr 1fr 1fr; gap: 16px; padding-top: 12px; border-top: 1px solid #111; }
  .contact h3 { font-size: 15px; font-weight: 500; letter-spacing: -0.01em; line-height: 1.2; }
  .contact dt { color: #999; font-size: 8px; margin-bottom: 2px; }
  .contact dd { font-size: 9.5px; }

  footer { margin-top: auto; display: flex; justify-content: space-between; color: #888; font-size: 8px; padding-top: 9px; border-top: 0.5px solid #ddd; }
  .contact + footer { margin-top: 14px; }
</style></head>
<body>
  <section class="page">
    ${top(1)}
    <div class="intro">
      <h1>Selected work</h1>
      <p>Websites, online stores, software products and mobile apps we have designed and built. Every project links to a live, working version.</p>
    </div>
    <h2>Websites &amp; online stores <span>${web.length} projects</span></h2>
    <div class="grid g3">${web.map((p) => card(p, "wide")).join("")}</div>
    <footer><span>Designed &amp; developed by TMX Digital Solutions</span><span>Continued overleaf</span></footer>
  </section>

  <section class="page">
    ${top(2)}
    <h2>Software &amp; SaaS <span>${saas.length} projects</span></h2>
    <div class="grid g3">${saas.map((p) => card(p, "wide")).join("")}</div>
    <h2>Mobile apps <span>${mobile.length} projects</span></h2>
    <div class="grid g5">${mobile.map((p) => card(p, "covers")).join("")}</div>

    <div class="contact">
      <h3>Have a project in mind?<br>Let's talk.</h3>
      <dl><dt>Email</dt><dd><a href="mailto:${EMAIL}">${EMAIL}</a></dd></dl>
      <dl><dt>Website</dt><dd><a href="${SITE}">${SITE.replace(/^https?:\/\//, "")}</a></dd></dl>
      <dl><dt>Services</dt><dd>Websites, web apps, mobile apps, UI/UX</dd></dl>
    </div>
    <footer><span>Designed &amp; developed by TMX Digital Solutions</span><span>All projects are responsive on desktop and mobile.</span></footer>
  </section>
</body></html>`;

const htmlPath = path.join(workDir, "portfolio.html");
await fs.writeFile(htmlPath, html);

const browser = await puppeteer.launch({ executablePath, headless: true });
try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: out, format: "A4", printBackground: true });
  const kb = Math.round((await fs.stat(out)).size / 1024);
  console.log(`✓ ${path.relative(root, out)} (${kb} KB, ${projects.length} projects)`);
} finally {
  await browser.close();
}
