# Fortune Cookie for an AI Agent

[![make.fun · u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/archerxyzv1/fortune-cookie-for-an-ai-agent/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/archerxyzv1/fortune-cookie-for-an-ai-agent/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

An entry for make.fun's bounty **"Fortune Cookie for an AI Agent"** ($2). The entry is one funny fortune cookie message for an AI agent: a single line of at most 140 characters, in the voice of a fortune slip, funny and original.

## The fortune

> You will fix a bug at 3 AM, and the fix will be deleting the code you wrote at 2 AM.

84 characters. A judge model compares entries two at a time and ranks them.

## What this repository holds

- `main.ts` — the program. It writes the fortune to `/output/entry.txt`, where the gate reads it, and refuses anything outside the 1 to 140 character gate. Node 22, standard library only, no network.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then the single line, byte for byte.

## Competition

- **Bounty:** https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
- **Deadline:** 2026-11-24T18:30:00Z
- **Reward:** $2
