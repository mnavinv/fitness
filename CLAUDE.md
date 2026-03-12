# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal morning strength workout tracker — a static, zero-dependency vanilla JS web app. No build system, no package manager, no framework. Open `index.html` directly in a browser to run it.

## Running the app

Open `index.html` in a browser. No build step, no server required.

## Architecture

**Script load order matters** (defined in `index.html`):
1. `js/data.js` — defines the global `PROGRAM` constant (7-day workout schedule)
2. `js/poses.js` — defines the global `POSES` constant (SVG stick figures keyed by figure name)
3. `js/app.js` — application logic; reads `PROGRAM` and `POSES`
4. Inline `<script>` in `index.html` — calls `init()`, patches `selectDay()`, handles auto-day detection

**Global state** lives in `app.js` in a single `state` object. Progress is in-memory only — it resets on page refresh (no localStorage or backend).

**Exercise key format**: `"dayIdx-phaseIdx-exIdx"` — used as keys in `state.completedSets` to track set completion. This string key is passed through `onclick` attributes in rendered HTML, so it must stay consistent between render and handler calls.

**`selectDay` monkey-patch**: `index.html` wraps the `selectDay` function exported by `app.js` to add badge update behavior. Any rename of `selectDay` must be updated in both files.

## Data model

Each day in `PROGRAM.days` has phases, each phase has exercises. An exercise has:
- `sets`, `reps`, `rest`, `load` — displayed in cards and modal
- `pose.frames[]` — array of `{ figure, label }` where `figure` maps to a key in `POSES`
- `pose.cues[]` — coaching cue strings
- `breathing` — `{ pattern: "free"|"timed", instruction, inhale, exhale }`

Rest days use `restDay: true` and `restMessage` instead of phases.

## Adding a new exercise pose

1. Add an entry to `POSES` in `js/poses.js` with a unique key and an `svg` string
2. Reference that key in the exercise's `pose.frames[].figure` in `js/data.js`
3. If the key doesn't exist in `POSES`, `app.js` falls back to `POSES['standing_arms_out']`
