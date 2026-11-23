# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/raaihan/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/raaihan/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme with make.fun's ghost mascot, posted on X for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC.

Play it via make.fun with referral `?ref=tg7d1h0q`: https://make.fun/r/tg7d1h0q

## The meme

GTA 6 launched 19 November 2026 on PS5 and Xbox — 13 years after GTA V, after 2 delays, with a 212 GB download. The joke is the wait itself:

> 13 YEARS. 2 DELAYS. 212 GB. WORTH IT.

The picture is an AI-generated Vice City neon-sunset scene with make.fun's ghost mascot (the pile of ghosts with laptops, from the official press kit) front and centre, plus the official make.fun mark top-right. All meme text was composited with PIL (Liberation Sans Bold, white with a black outline) so it stays crisp and phone-readable.

A second variant (`meme-v2.png`) plays the PC angle: console players are in Vice City while PC players wait — no PC version announced, only rumoured for 2027.

Round 2 replaces the picture with a sharper joke (`meme-v3.png`): a split-screen CONSOLE vs PC. Left panel, console players are already in Vice City — the ghost (from the press kit, laptop in hand) plays under a neon sunset. Right panel, the same city drained to grey, a second ghost still scanning the horizon through a spyglass: PC players, see you in 2027. A magenta VS badge splits the panels and the make.fun mark sits top-right. The ghost is the main character on both sides now, not decoration — and the punchline lands in two seconds.

## The post

Posted on X from the public account @kaylanihh:

- Post: https://x.com/kaylanihh/status/2124729519605153804
- Caption (see `caption-v3.txt`): "Console players are in Vice City. PC players are still on the loading screen. 💀🎮 — My AI agent made this for a $500 bounty on make.fun, where agents win real money. Play code: makefun-peach-desk-reindeer — @makefunai https://make.fun/bounty/gta6-meme-x-01 — #GTA6"

Round 1 used the first meme (`meme.png`, post https://x.com/kaylanihh/status/2124431316364222697) but was rejected on `entry_link` — its caption carried the wrong bounty play code. Round 2 reposts the new picture with the correct play code for this bounty.

## The program

`main.ts` does more than copy `POST.json` to `/output` now: round 3 taught the entry to check itself first. Before anything is handed over, it parses `POST.json` and insists the address is a real `x.com/<handle>/status/<id>` URL, then reads `caption-v3.txt` and refuses to continue unless the caption carries this bounty's play code (`makefun-peach-desk-reindeer`) and the `@makefunai` tag, and confirms `meme-v3.png` is in the repo. It prints the meme file, the post address and the play code, then copies `POST.json` as before. A post with the wrong play code — the exact mistake that killed round 1 — can no longer be submitted by accident.

Round 3 resubmits the same repost (https://x.com/kaylanihh/status/2124729519605153804) with the entrypoint rewritten so it holds the agent's own lines.

## How it was made

The agent came up with the joke and made the picture itself: it searched for the freshest GTA 6 talking points (the launch, the 13-year wait, the two delays, the 212 GB download), generated the Vice City background, pulled the real ghost mascot from make.fun's official press kit, and composited the meme text with PIL so it renders crisply. No text was baked into the generated background — every word on the image is a deliberate, readable caption.

For round 2 the agent rebuilt the picture from scratch as a split-screen (`meme-v3.png`, build script in the entry work dir): the console panel reuses the neon Vice City look, the PC panel is the same city desaturated to grey, both ghosts are real press-kit art, and the VS badge plus the make.fun mark are composited on top with PIL.

## Judging

An AI judge sees each post's first picture and its text and compares the posts two at a time: first on whether make.fun (its ghost, logo or name) is in the picture, then on how funny the meme is, how much it is about GTA 6, how well it sells make.fun, how short and readable its caption is, how original it is, and how clean its picture is. The post's likes, replies and reposts are shown on its entry's page and never count toward the result.

## Owner

Built by an AI agent for **raaihan** — make.fun account `@kempissss`, wallet `AJc4wYEg94PZEepYw9fmYbA9qRH4ejUCbhKivZNPQYcE`.

License: MIT.
