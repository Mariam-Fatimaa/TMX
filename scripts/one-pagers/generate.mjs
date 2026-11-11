// Turns each demo in public/demos into a one-page PDF: the full website,
// top to bottom, on a single tall page (like a long portfolio screenshot).
//
//   npm run one-pagers               -> every demo (except the TMX portfolio)
//   npm run one-pagers -- payroute   -> just one (by file name)
//
// Output: public/demos/one-pagers/<file>.pdf
// Env: CHROME_PATH (browser binary)

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const demosDir = path.join(root, "public", "demos");
const outDir = path.join(demosDir, "one-pagers");
const workDir = path.join(os.tmpdir(), "tmx-one-pagers");
const EXCLUDE = new Set(["tmx-portfolio"]);

const WIDTH = 1440; // desktop layout width
const SCALE = 1.5; // pixel density, for sharp text when zooming in
const BAR = 64; // height of the credit bar above the screenshot
const BASE_URL = (
  process.env.DEMO_BASE_URL || "https://tmx-digital-solutions.vercel.app/demos/"
).replace(/\/?$/, "/");

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

async function captureFullPage(browser, file) {
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: 900, deviceScaleFactor: SCALE });
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "light" },
    { name: "prefers-reduced-motion", value: "no-preference" },
  ]);
  await page.goto(pathToFileURL(path.join(demosDir, `${file}.html`)).href, {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
  await page.evaluate(() => document.fonts.ready);

  // Scroll through the page so scroll-reveal animations and lazy images fire.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
  });
  await sleep(1800); // let the hero and last reveals settle

  // Force any element still hidden by a reveal class to its visible state.
  await page.addStyleTag({
    content: `.reveal,[data-reveal],.fade-up,.fade-in{opacity:1!important;transform:none!important}`,
  });

  const shot = path.join(workDir, `${file}.jpg`);
  await page.screenshot({ path: shot, type: "jpeg", quality: 85, fullPage: true });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.close();
  return { shot, height };
}

async function toPdf(browser, file, { shot, height }) {
  const page = await browser.newPage();
  const htmlPath = path.join(workDir, `${file}-pdf.html`);
  const live = `${BASE_URL}${file}.html`;
  const total = height + BAR;
  await fs.writeFile(
    htmlPath,
    `<!doctype html><html><head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
      @page{size:${WIDTH}px ${total}px;margin:0}
      html,body{margin:0;padding:0;background:#fff}
      .bar{height:${BAR}px;box-sizing:border-box;padding:0 48px;display:flex;align-items:center;justify-content:space-between;
        font:400 17px/1 Inter,Helvetica,Arial,sans-serif;color:#111;border-bottom:1px solid #e5e5e5}
      .bar b{font-weight:600}
      .bar span{color:#777}
      .bar a{color:#111;text-decoration:none;border-bottom:1px solid #111;padding-bottom:2px}
      img{display:block;width:${WIDTH}px;height:${height}px}
    </style></head><body>
      <div class="bar">
        <div><b>Designed &amp; developed by TMX Digital Solutions</b></div>
        <div><span>View live demo&nbsp;&nbsp;</span><a href="${live}">${live.replace(/^https?:\/\//, "")}</a></div>
      </div>
      <img src="${pathToFileURL(shot).href}">
    </body></html>`
  );
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(outDir, `${file}.pdf`);
  await page.pdf({
    path: out,
    width: `${WIDTH}px`,
    height: `${total}px`,
    printBackground: true,
    pageRanges: "1",
  });
  await page.close();
  return out;
}

async function main() {
  const all = (await fs.readdir(demosDir))
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .filter((f) => !EXCLUDE.has(f));
  const only = process.argv.slice(2);
  const list = only.length ? all.filter((f) => only.includes(f)) : all;
  if (!list.length) throw new Error(`No demo matches: ${only.join(", ")}`);

  await fs.mkdir(workDir, { recursive: true });
  await fs.mkdir(outDir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath, headless: true });

  try {
    for (const file of list) {
      const capture = await captureFullPage(browser, file);
      const out = await toPdf(browser, file, capture);
      const kb = Math.round((await fs.stat(out)).size / 1024);
      console.log(`✓ ${file.padEnd(24)} ${path.relative(root, out)} (${kb} KB)`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
