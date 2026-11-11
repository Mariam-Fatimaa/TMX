// Builds public/demos/TMX-Portfolio.pdf: a one-page A4 overview of all demos.
//
//   npm run portfolio
//
// Edit the `projects` list below to change copy or order.
// Env: CHROME_PATH (browser binary), DEMO_BASE_URL (live demo link base)

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const demosDir = path.join(root, "public", "demos");
const out = path.join(demosDir, "TMX-Portfolio.pdf");
const workDir = path.join(os.tmpdir(), "tmx-portfolio");

const SITE = "https://tmx-digital-solutions.vercel.app";
const BASE_URL = (process.env.DEMO_BASE_URL || `${SITE}/demos/`).replace(/\/?$/, "/");
const EMAIL = "hello@tmxdigitalsolutions.com";

const projects = [
  { file: "saffron-and-salt", name: "Saffron & Salt", type: "Website", desc: "Restaurant website with menus, opening hours and table bookings." },
  { file: "lumen-clinic", name: "Lumen Clinic", type: "Website", desc: "Dental and skin clinic website with online appointment booking." },
  { file: "northpeak-logistics", name: "Northpeak Logistics", type: "Website", desc: "Corporate site for a freight company, with tracking and quotes." },
  { file: "plinth", name: "Plinth", type: "Website", desc: "Property website with map search and viewing requests." },
  { file: "atelier-noor", name: "Atelier Noor", type: "Website", desc: "Portfolio site for an architecture and interiors studio." },
  { file: "aurel-jewellery", name: "AUREL", type: "E-commerce", desc: "Online store for a fine jewellery brand." },
  { file: "slate-and-signal", name: "Slate & Signal", type: "Website", desc: "Website for an independent creative studio." },
  { file: "fluxboard", name: "Fluxboard", type: "SaaS", desc: "Marketing site for a goals and team analytics tool." },
  { file: "payroute", name: "Payroute", type: "SaaS", desc: "Website for an invoicing and international payments app." },
  { file: "relaywise", name: "Relaywise", type: "SaaS", desc: "Landing page for an AI-assisted customer support inbox." },
  { file: "ledgerline-reimagined", name: "Ledgerline", type: "SaaS", desc: "Redesign concept for an everyday investing app." },
  { file: "inkwell-cms", name: "Inkwell", type: "CMS", desc: "Launch site for a headless CMS built for newsrooms." },
  { file: "stacksite", name: "Stacksite", type: "CMS", desc: "Landing page for a small-business website builder." },
];

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const executablePath = chromeCandidates.find((p) => existsSync(p));
if (!executablePath) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

async function thumbnail(browser, file) {
  const page = await browser.newPage();
  // 1440x1080 (4:3, matches the thumbnail) at 0.6x -> 864x648 image: sharp in print, small file.
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 0.6 });
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
  await page.goto(pathToFileURL(path.join(demosDir, `${file}.html`)).href, {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
  await page.evaluate(() => document.fonts.ready);
  await sleep(2500);
  const p = path.join(workDir, `${file}.jpg`);
  await page.screenshot({ path: p, type: "jpeg", quality: 85 });
  await page.close();
  return p;
}

function html(items) {
  const year = new Date().getFullYear();
  const cards = items
    .map(
      (p, i) => `
    <a class="item" href="${esc(BASE_URL + p.file + ".html")}">
      <img src="${pathToFileURL(p.thumb).href}" alt="">
      <div class="meta"><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="name">${esc(p.name)}</span><span class="type">${esc(p.type)}</span></div>
      <p>${esc(p.desc)}</p>
    </a>`
    )
    .join("");

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>TMX Digital Solutions — Selected work</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { width: 210mm; height: 297mm; overflow: hidden; background: #fff; }
  body { font: 400 9.5px/1.5 Inter, Helvetica, Arial, sans-serif; color: #111; padding: 48px 48px 40px; display: flex; flex-direction: column; }
  a { color: inherit; text-decoration: none; }

  .top { display: flex; justify-content: space-between; font-size: 9.5px; color: #111; padding-bottom: 10px; border-bottom: 1px solid #111; }
  .top span:last-child { color: #777; }

  .intro { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: end; padding: 34px 0 30px; }
  h1 { font-size: 34px; font-weight: 500; letter-spacing: -0.02em; line-height: 1.05; }
  .intro p { color: #555; font-size: 10.5px; max-width: 46ch; }

  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px 16px; }
  .item img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: top; border: 0.5px solid #ddd; }
  .meta { display: flex; align-items: baseline; gap: 6px; margin-top: 8px; padding-top: 6px; border-top: 0.5px solid #ddd; }
  .n { color: #999; font-size: 8.5px; font-variant-numeric: tabular-nums; }
  .name { font-weight: 600; font-size: 10px; }
  .type { margin-left: auto; color: #888; font-size: 8.5px; }
  .item p { color: #555; margin-top: 2px; }

  .contact { grid-column: span 3; align-self: start; border-top: 0.5px solid #ddd; padding-top: 6px; margin-top: 0; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
  .contact dt { color: #999; font-size: 8.5px; margin-bottom: 2px; }
  .contact dd { font-size: 10px; }

  footer { margin-top: auto; display: flex; justify-content: space-between; color: #888; font-size: 8.5px; padding-top: 10px; border-top: 0.5px solid #ddd; }
</style></head>
<body>
  <div class="top"><span>TMX Digital Solutions</span><span>Selected work, ${year}</span></div>

  <section class="intro">
    <h1>Selected work</h1>
    <p>A selection of websites and product pages we have designed and built for restaurants, clinics, logistics, property, retail and software companies. Each project links to its live site.</p>
  </section>

  <section class="grid">
    ${cards}
    <div class="contact">
      <dl><dt>Email</dt><dd><a href="mailto:${EMAIL}">${EMAIL}</a></dd></dl>
      <dl><dt>Website</dt><dd><a href="${SITE}">${SITE.replace(/^https?:\/\//, "")}</a></dd></dl>
      <dl><dt>Services</dt><dd>Websites, web apps, UI/UX design</dd></dl>
    </div>
  </section>

  <footer><span>TMX Digital Solutions</span><span>All projects are live and responsive on desktop and mobile.</span></footer>
</body></html>`;
}

async function main() {
  await fs.mkdir(workDir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath, headless: true });
  try {
    const items = [];
    for (const p of projects) {
      items.push({ ...p, thumb: await thumbnail(browser, p.file) });
      process.stdout.write(".");
    }
    const htmlPath = path.join(workDir, "portfolio.html");
    await fs.writeFile(htmlPath, html(items));
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: out, format: "A4", printBackground: true, pageRanges: "1" });
    const kb = Math.round((await fs.stat(out)).size / 1024);
    console.log(`\n✓ ${path.relative(root, out)} (${kb} KB)`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
