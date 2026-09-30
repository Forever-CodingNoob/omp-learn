# learn

Forked from [amosblomqvist/learn](https://github.com/amosblomqvist/learn).

[![video](assets/thumbnail.png)](https://www.youtube.com/watch?v=kzcI5F4tGiU)

Eero Alvar's AI learning system from his video: [How I Use AI to Learn Things](https://www.youtube.com/watch?v=kzcI5F4tGiU).

This is a personal system Eero Alvar built for himself, shared as-is. Built as a pi configuration: the teaching philosophy encoded in a skill, a few small extensions, and agent definitions.

## What's in it

- `skills/teach/` — the philosophy and the process
- `skills/visualize/` — adds a correct, minimal diagram to a lesson when an idea is clearer as a picture
- `extensions/ask-user-question/` — the agent asks you questions through a UI popup
- `extensions/quiz/` — graded questions with instant feedback (✓/✗, correct answer, explanation)
- `extensions/md-log/` — link a markdown file to the session
- `extensions/visual-tools/` — tools for visualization subagents
- `agents/` — `researcher`, `svg-maker`, `mermaid-maker`: the subagents the system delegates to

## Install

This repo **is** an `.omp` directory. From your learning project's root:

```bash
git clone https://github.com/Forever-CodingNoob/omp-learn .omp
```

Install the visual tools' dependencies in `.omp/extensions/visual-tools`:

```bash
cd .omp/extensions/visual-tools
bun install --omit=dev
```

Then open omp in your learning project's root. (Or copy the pieces you want into your existing project config.)

## Requirements

- [omp](https://github.com/can1357/oh-my-pi)
- omp's built-in `task` tool spawns the researcher and the visual makers.
- Rendering: Mermaid PNGs need a headless Chromium (`node_modules/.bin/puppeteer browsers install chrome-headless-shell` in `extensions/visual-tools`), Chromium's system libraries, and fonts; SVG PNGs need `rsvg-convert` (librsvg) and fonts.
- `ask-user-question` — use the copy bundled here. If your setup already has an `ask-user-question` extension, use **this** one in its place. Popups from different extensions serialize through a shared UI lock, which only works when it's the same implementation.

## Notes

You can run the system without subagents. The main session does the teaching. You just lose the researcher (truth verification) and the generated visuals.

The teaching skill is written for one learner. Edit the skill to fit how you learn best.
