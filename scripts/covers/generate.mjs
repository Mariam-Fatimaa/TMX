// Generates optimized cover images for every project in src/data/projects.json
// by screenshotting its demo in public/demos.
//
//   npm run covers                -> all projects
//   npm run covers -- kiln-coffee -> just one (by slug)
//
// Output:
//   public/Images/projects/covers/<slug>.webp  1000x1250 (4:5, cards)
//   public/Images/projects/wide/<slug>.webp    1600x1000 (16:10, wide layouts)
// Mobile app demos must have an element with id="phone"; the 4:5 cover shows it.

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const demosDir = path.join(root, "public", "demos");
const coverDir = path.join(root, "public", "Images", "projects", "covers");
const wideDir = path.join(root, "public", "Images", "projects", "wide");
const projects = JSON.parse(await fs.readFile(path.join(root, "src", "data", "projects.json"), "utf8"));

const CARD_BG = "#F1F0ED";

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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function open(browser, slug, width, height, scale = 1) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: scale });
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
  await page.goto(pathToFileURL(path.join(demosDir, `${slug}.html`)).href, {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
  await page.evaluate(() => document.fonts.ready);
  await sleep(2500); // let hero animations settle
  return page;
}

async function build(browser, p) {
  const isMobile = p.category === "Mobile Apps";

  // Wide 16:10 — the hero at a desktop viewport.
  let page = await open(browser, p.slug, 1440, 900, 1600 / 1440);
  const wide = await page.screenshot({ type: "png" });
  await sharp(wide).resize(1600, 1000).webp({ quality: 80 }).toFile(path.join(wideDir, `${p.slug}.webp`));

  // Tall 4:5 cover.
  if (isMobile) {
    await page.close();
    page = await open(browser, p.slug, 1440, 1080, 2);
    const phone = await page.$("#phone");
    if (!phone) throw new Error(`${p.slug}: no #phone element for the mobile cover`);
    const shot = await phone.screenshot({ type: "png", omitBackground: true });
    const fitted = await sharp(shot).resize({ height: 1080, width: 880, fit: "inside" }).toBuffer();
    await sharp({ create: { width: 1000, height: 1250, channels: 4, background: CARD_BG } })
      .composite([{ input: fitted, gravity: "center" }])
      .webp({ quality: 82 })
      .toFile(path.join(coverDir, `${p.slug}.webp`));
  } else {
    await page.close();
    page = await open(browser, p.slug, 1440, 1800, 1000 / 1440);
    const tall = await page.screenshot({ type: "png" });
    await sharp(tall).resize(1000, 1250).webp({ quality: 80 }).toFile(path.join(coverDir, `${p.slug}.webp`));
  }
  await page.close();
}

const only = process.argv.slice(2);
const list = only.length ? projects.filter((p) => only.includes(p.slug)) : projects;
if (!list.length) throw new Error(`No project matches: ${only.join(", ")}`);

await fs.mkdir(coverDir, { recursive: true });
await fs.mkdir(wideDir, { recursive: true });
const browser = await puppeteer.launch({ executablePath, headless: true });
try {
  for (const p of list) {
    if (!existsSync(path.join(demosDir, `${p.slug}.html`))) {
      console.log(`- ${p.slug}: demo not found, skipped`);
      continue;
    }
    await build(browser, p);
    const kb = async (d) => Math.round((await fs.stat(path.join(d, `${p.slug}.webp`))).size / 1024);
    console.log(`✓ ${p.slug.padEnd(24)} cover ${await kb(coverDir)} KB, wide ${await kb(wideDir)} KB`);
  }
} finally {
  await browser.close();
}
