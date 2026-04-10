

# Fix Hero Background Video and Countdown Timer

## Overview
Two issues to fix:
1. The hero section uses a static image instead of a video background. The official ScubaDiveIn website uses a PADI video.
2. The countdown timer shows all zeros because the target date (Feb 15, 2026) has already passed (current date is April 10, 2026).

## Changes

### 1. Replace static image with video background (`HeroSection.tsx`)

Replace the `<img>` tag in the background section with a `<video>` element using the same video from the official site:

- **Video URL**: `https://pro-cms.padi.com/sites/default/files/documents/marketing-hub/Lead%20Adventure%20Video_ENGLISH.mp4`
- Attributes: `autoPlay`, `muted`, `loop`, `playsInline` for seamless background playback
- Keep the existing gradient overlay on top of the video
- Keep the static image as a `poster` fallback while the video loads
- Remove the `heroImage` import (no longer needed as primary background, but keep as poster)

### 2. Fix Countdown Timer (`CountdownTimer.tsx`)

The target date of `2026-02-15` is in the past. Update to a future date:
- Change target to **July 1, 2026** (next realistic batch start)
- Update the text from "February batch" to "July batch"
- This ensures the timer actually counts down instead of showing all zeros

## Files to Modify
1. `src/components/landing/HeroSection.tsx` - Replace `<img>` with `<video>` in background
2. `src/components/landing/CountdownTimer.tsx` - Update target date to future date

