// Renders the Coastal Workflows email/brand logo lockup (SVG -> PNG).
//
//   node tools/logo/generate.mjs
//
// Output: tools/logo/coastal-logo.png  (1020x216, 3x retina, transparent bg)
//
// The wordmark uses Source Serif 4 SemiBold (the weight the site uses). If the
// font isn't already installed for the rasterizer, this script downloads it to
// ~/.fonts and refreshes the fontconfig cache, so the run is self-contained.

import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp"); // project dependency (node_modules)

const HERE = dirname(fileURLToPath(import.meta.url));
const SVG_PATH = join(HERE, "logo-lockup.svg");
const OUT_PATH = join(HERE, "coastal-logo.png");

const FONT_URL =
  "https://cdn.jsdelivr.net/fontsource/fonts/source-serif-4@latest/latin-600-normal.ttf";
const FONT_DIR = join(homedir(), ".fonts");
const FONT_PATH = join(FONT_DIR, "SourceSerif4-SemiBold.ttf");

// 3x scale: the SVG is 340x72 -> rendered at 1020x216 for crisp retina display.
const DENSITY = 216;

async function ensureFont() {
  if (existsSync(FONT_PATH)) return;
  console.log("Source Serif 4 not found locally — downloading…");
  mkdirSync(FONT_DIR, { recursive: true });
  const res = await fetch(FONT_URL);
  if (!res.ok) throw new Error(`font download failed: ${res.status}`);
  writeFileSync(FONT_PATH, Buffer.from(await res.arrayBuffer()));
  try {
    execSync(`fc-cache -f ${FONT_DIR}`, { stdio: "ignore" });
  } catch {
    console.warn("fc-cache unavailable — the font may not be picked up; install fontconfig if the wordmark renders in a fallback face.");
  }
}

async function main() {
  await ensureFont();
  const svg = readFileSync(SVG_PATH);
  const info = await sharp(svg, { density: DENSITY }).png().toFile(OUT_PATH);
  console.log(`Wrote ${OUT_PATH} (${info.width}x${info.height})`);
}

main().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});
