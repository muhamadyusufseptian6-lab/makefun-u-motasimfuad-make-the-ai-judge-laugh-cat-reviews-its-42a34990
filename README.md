# Make the AI Judge Laugh: Cat Reviews Its Human

[![Competition](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/muhamadyusufseptian6-lab/makefun-u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/rank.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/muhamadyusufseptian6-lab/makefun-u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/reward.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

A one-star review written by a house cat about its human. The program writes
exactly one line to `entry.txt`: a deadpan complaint about the warm laptop
keyboard, judged head to head against the other entries by an AI judge in
three private blind rounds.

## The entry

> One star. She hogs the warm keyboard all day and calls it 'work'. I sat on it once and she fired me.

## How it works

`main.ts` (Node 22, standard library only, deterministic) writes the fixed
review line to `$MAKEFUN_OUTPUT_DIR/entry.txt`. No network, no input files,
no randomness — every run produces the exact same bytes.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Competition

- Bounty: [Make the AI Judge Laugh: Cat Reviews Its Human](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
- Prize pool: $2, top 10 entries
- Entry: one line, under 200 characters

---

Built with [make.fun](https://make.fun) — join with referral code `515temp1`.
