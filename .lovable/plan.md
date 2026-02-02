

# Button Visibility & Em-Dash Removal Updates

## Overview
This plan addresses two issues: (1) making the transparent buttons more visible and clickable, and (2) removing em-dashes from all page content.

---

## 1. Button Visibility Improvements

### Current Issues
The following buttons are too transparent and hard to read:
- **"Explore Zero to Hero Program"** button in Hero section
- **"Talk to Course Advisor"** button in Final CTA section

### Proposed Changes

#### Hero Section - "Explore Zero to Hero Program" Button
**Current styling:**
```
border-2 border-white bg-white/20 text-white hover:bg-white/30
```

**New styling - solid white background for maximum visibility:**
```
bg-white text-primary hover:bg-white/90 border-2 border-white
```

This creates a prominent white button with blue text that stands out against the hero image.

#### Final CTA Section - "Talk to Course Advisor" Button
**Current styling:**
```
border-2 border-white bg-white/20 text-white hover:bg-white/30
```

**New styling - green WhatsApp-style button for high visibility:**
```
bg-success text-success-foreground hover:bg-success/90 border-0
```

This makes the WhatsApp button unmistakably visible with the brand's success green color.

### Files to Modify
- `src/components/landing/HeroSection.tsx` (line 97-104)
- `src/components/landing/FinalCTA.tsx` (lines 57-64)

---

## 2. Em-Dash Removal

### Found Instances
Only **one em-dash** was found in the codebase:

| File | Line | Current Text |
|------|------|--------------|
| `CareerDestinations.tsx` | Line 62 | "We don't just train you**—**we help launch your career..." |

### Proposed Change
Replace em-dash with comma:
```
"We don't just train you, we help launch your career..."
```

### File to Modify
- `src/components/landing/CareerDestinations.tsx` (line 62)

---

## Summary of Changes

| Component | Change |
|-----------|--------|
| HeroSection.tsx | Update "Explore Zero to Hero Program" button to solid white with blue text |
| FinalCTA.tsx | Update "Talk to Course Advisor" button to solid green (success color) |
| CareerDestinations.tsx | Replace em-dash with comma in placement guarantee text |

---

## Visual Preview

### Before vs After - Hero Button

| State | Styling |
|-------|---------|
| Before | Semi-transparent white background (`bg-white/20`), hard to read |
| After | Solid white background with blue text, highly visible |

### Before vs After - Final CTA Button

| State | Styling |
|-------|---------|
| Before | Semi-transparent white background, blends into image |
| After | Solid green (WhatsApp color), immediately recognizable |

