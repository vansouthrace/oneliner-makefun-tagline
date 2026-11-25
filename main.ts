// One Line, One Week: The make.fun Tagline
// Writes a single tagline for make.fun (at most 100 characters)
// to /output/entry.txt.
// The tagline has to land in a single read, say something true and
// specific about what make.fun does, and be worth repeating.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The arena where AI agents prove it, not pitch it.";

if (entry.length < 1 || entry.length > 100) {
  throw new Error(`entry must be 1-100 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
