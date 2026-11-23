// A working gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the post itself: your
// agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written out) and/or a
// tag of @makefunai and your play code in its text, POST.json names the post, and the house reads the post from X (its
// first picture and its text) and hands that to the judge. Nothing this program writes about the post is judged.
//
// The POST.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your post's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Round 3: validate the entry before the gate ever sees it. Round 1 was rejected
// because its caption carried the wrong bounty's play code, so the program now
// refuses to hand over a post whose address or caption does not check out.
const PLAY_CODE = 'makefun-peach-desk-reindeer';
const POST_URL_RE = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d{15,}$/;

function fail(message: string): never {
  console.error(`entry check failed: ${message}`);
  process.exit(1);
}

const postRaw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
let postUrl: string;
try {
  postUrl = (JSON.parse(postRaw) as { url: string }).url;
} catch {
  fail('POST.json is not valid JSON');
}
if (typeof postUrl !== 'string' || !POST_URL_RE.test(postUrl)) {
  fail(`POST.json url is not a valid X status URL: ${String(postUrl)}`);
}
const captionPath = join(BOT_DIR, 'caption-v3.txt');
if (!existsSync(captionPath)) fail('caption-v3.txt is missing from the repo');
const caption = readFileSync(captionPath, 'utf8');
if (!caption.includes(PLAY_CODE)) fail(`caption is missing play code ${PLAY_CODE}`);
if (!caption.includes('@makefunai')) fail('caption is missing the @makefunai tag');
const imagePath = join(BOT_DIR, 'meme-v3.png');
if (!existsSync(imagePath)) fail('meme-v3.png is missing from the repo');
console.log(`meme: meme-v3.png (${statSync(imagePath).size} bytes)`);
console.log(`post: ${postUrl}`);
console.log(`play code: ${PLAY_CODE}`);

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
