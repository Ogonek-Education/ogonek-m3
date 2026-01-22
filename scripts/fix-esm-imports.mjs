#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "src");
const EXTS_CHECK = [".ts", ".tsx", ".svelte", ".js", ".mjs", ".cjs"];
const INDEX_NAMES = ["index.ts", "index.tsx", "index.svelte", "index.js", "index.mjs", "index.cjs"];

function isRelative(spec) {
  return spec.startsWith("./") || spec.startsWith("../");
}

function splitSpec(spec) {
  const qIndex = spec.indexOf("?");
  const hIndex = spec.indexOf("#");
  let cut = -1;
  if (qIndex !== -1 && hIndex !== -1) cut = Math.min(qIndex, hIndex);
  else cut = qIndex !== -1 ? qIndex : hIndex;
  if (cut === -1) return { base: spec, suffix: "" };
  return { base: spec.slice(0, cut), suffix: spec.slice(cut) };
}

function hasKnownExt(specBase) {
  return /\.[a-z0-9]+$/i.test(specBase);
}

function fileExists(p) {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
}

function dirExists(p) {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

function resolveSpec(spec, filePath) {
  if (!isRelative(spec)) return spec;

  const { base, suffix } = splitSpec(spec);
  const ext = path.extname(base);

  if (ext === ".ts") return base.slice(0, -3) + ".js" + suffix;
  if (ext === ".tsx") return base.slice(0, -4) + ".jsx" + suffix;
  if (ext === ".js" || ext === ".mjs" || ext === ".cjs" || ext === ".svelte") return spec;

  // If a different extension is present (e.g., .css/.json), leave it alone.
  if (ext) return spec;

  const absBase = path.resolve(path.dirname(filePath), base);

  // Direct file match
  for (const extCandidate of EXTS_CHECK) {
    if (fileExists(absBase + extCandidate)) {
      const resolved = base + extCandidate;
      if (extCandidate === ".ts") return base + ".js" + suffix;
      if (extCandidate === ".tsx") return base + ".jsx" + suffix;
      return resolved + suffix;
    }
  }

  // Directory index match
  if (dirExists(absBase)) {
    for (const idx of INDEX_NAMES) {
      if (fileExists(path.join(absBase, idx))) {
        if (idx.endsWith(".ts")) return base + "/index.js" + suffix;
        if (idx.endsWith(".tsx")) return base + "/index.jsx" + suffix;
        if (idx.endsWith(".svelte")) return base + "/index.svelte" + suffix;
        return base + "/" + idx + suffix;
      }
    }
  }

  return spec;
}

function updateContent(filePath, content) {
  let updated = content;
  let changed = false;

  const staticRe = /\b(?:import|export)\s+(?:[^'"\n]*?\s+from\s+)?(['"])([^'"\n]+)\1/g;
  updated = updated.replace(staticRe, (full, quote, spec) => {
    const next = resolveSpec(spec, filePath);
    if (next !== spec) changed = true;
    return full.replace(quote + spec + quote, quote + next + quote);
  });

  const dynamicRe = /\bimport\s*\(\s*(['"])([^'"\n]+)\1\s*\)/g;
  updated = updated.replace(dynamicRe, (full, quote, spec) => {
    const next = resolveSpec(spec, filePath);
    if (next !== spec) changed = true;
    return full.replace(quote + spec + quote, quote + next + quote);
  });

  return { updated, changed };
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
      continue;
    }
    if (entry.isFile()) files.push(full);
  }
  return files;
}

function shouldProcess(filePath) {
  if (filePath.endsWith(".d.ts")) return false;
  return filePath.endsWith(".ts") || filePath.endsWith(".svelte") || filePath.endsWith(".js");
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`src directory not found at ${ROOT}`);
    process.exit(1);
  }

  const allFiles = walk(ROOT).filter(shouldProcess);
  let touched = 0;

  for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, "utf8");
    const { updated, changed } = updateContent(filePath, content);
    if (!changed) continue;
    fs.writeFileSync(filePath, updated, "utf8");
    touched += 1;
    console.log(`updated ${path.relative(process.cwd(), filePath)}`);
  }

  console.log(`done: ${touched} file(s) updated`);
}

main();
