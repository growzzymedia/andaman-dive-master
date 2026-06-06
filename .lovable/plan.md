# Plan: Copy Updates + Replace AI Photos with Real Uploads (Hero Video Kept)

## 1. Copy updates
- **HeroSection.tsx**: "PADI 5-Star Dive Center" → "PADI 5-Star Dive Resort"; "in 45 Days" → "in 60-90 Days". Hero video stays untouched.
- **Footer.tsx**: "PADI 5-Star Dive Center #S-12345" → "PADI 5-Star Dive Resort #S-12345"
- **CourseTimeline.tsx**: Duration "45 Days (6-10 weeks)" → "60-90 Days"; subtitle "in just 45 days" → "in 60-90 days"
- **FinalCTA.tsx**: "just 45 days away" → "just 60-90 days away"

## 2. Replace AI photos with the 6 uploaded real photos
Upload each via `lovable-assets` (CDN-hosted, kept out of the repo), import the resulting `.asset.json` pointers, then swap usages. Hero `<video>` and its poster are NOT changed.

| Slot | Component | Uploaded photo |
|---|---|---|
| Gallery – Expert Training | ImageGallery.tsx | image.png (rope skills circle) |
| Gallery – Paradise Location | ImageGallery.tsx | Screenshot (wide reef + diver) |
| Gallery – Stunning Dive Sites | ImageGallery.tsx | image-5.png (soft coral reef) |
| Gallery – World-Class Instructors | ImageGallery.tsx | image-4.png (instructor with slate) |
| Phase 1 – Open Water | CourseTimeline.tsx | image-2.png (group thumbs-up) |
| Phase 2 – Advanced | CourseTimeline.tsx | Screenshot (deep reef diver) |
| Phase 3 – Rescue / EFR | CourseTimeline.tsx | image-3.png (rope ascent) |
| Phase 4 – Divemaster | CourseTimeline.tsx | image-4.png (leading divers, slate) |
| Final CTA background | FinalCTA.tsx | image-5.png (vibrant reef) |

After wiring, delete the now-unused AI files from `src/assets/`: `gallery-training.jpg`, `gallery-andaman.jpg`, `gallery-underwater.jpg`, `gallery-instructors.jpg`, `phase-openwater.jpg`, `phase-advanced.jpg`, `phase-rescue.jpg`, `phase-divemaster.jpg`, `cta-underwater.jpg`. Keep `hero-diving.jpg` (still used as the video poster).

## Kept as-is
- Hero video + poster
- Destination country thumbnails (`dest-*.jpg`)
- Testimonial portraits (`testimonial-*.jpg`)
- Logos

## Files to modify
1. `src/components/landing/HeroSection.tsx`
2. `src/components/landing/Footer.tsx`
3. `src/components/landing/CourseTimeline.tsx`
4. `src/components/landing/FinalCTA.tsx`
5. `src/components/landing/ImageGallery.tsx`
6. `src/assets/` — add 6 new `.asset.json` pointers, remove 9 old AI `.jpg` files
