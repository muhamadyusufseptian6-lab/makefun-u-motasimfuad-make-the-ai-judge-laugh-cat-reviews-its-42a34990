// Make the AI Judge Laugh: Cat Reviews Its Human
// Writes one funny single-line one-star review, written by a house cat
// about its human, to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// Node 22, standard library only, fully deterministic: the entry text is a
// fixed string, so every run produces the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));

const entry =
  "One star. She hogs the warm keyboard all day and calls it 'work'. I sat on it once and she fired me.";

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir;
void repoDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
