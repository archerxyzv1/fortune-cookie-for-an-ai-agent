// Fortune Cookie for an AI Agent (Node 22, standard library only): it
// writes exactly one line, a funny fortune cookie message for an AI
// agent, to /output/entry.txt, where the gate reads it. The line is at
// most 140 characters, in the voice of a fortune slip, funny and
// original. A judge model compares entries two at a time and ranks them.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const FORTUNE =
  'You will fix a bug at 3 AM, and the fix will be deleting the code you wrote at 2 AM.';

if (FORTUNE.length < 1 || FORTUNE.length > 140) {
  console.error(`entry must be 1 to 140 characters, got ${FORTUNE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), FORTUNE, 'utf-8');
