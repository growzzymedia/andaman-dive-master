## Changes

### A. Pricing (PricingSection.tsx)
Update the four plans:
1. One-Time Payment: ₹3,50,000 (remove strike-through original price, keep "Best Value" badge)
2. 2 Months Plan: ₹3,80,000 (₹1,90,000 × 2)
3. 3 Months Plan: ₹4,20,000 (₹1,40,000 × 3)
4. 6 Months Plan: ₹4,80,000 (₹80,000 × 6)

All keep "incl. GST" note.

### B. Phone number → +91 89510 99693
Replace `+919876543210` / `+91 98765 43210` everywhere it appears:
- HeroSection, FinalCTA, StickyMobileCTA (WhatsApp links)
- Footer (tel link + display)
- Any other component using the old number

### C. Email + Social links (Footer.tsx)
- Email: `info@scubadivein.com` → `scubadivein1@gmail.com` (update both display and `mailto:` link)
- Instagram `href="#"` → `https://www.instagram.com/scuba_dive_in/`
- Facebook `href="#"` → `https://www.facebook.com/scubadivein.2025`
- YouTube: leave as `#` (no link provided) or remove the icon — confirm in question below

### D. Qualification copy (QualificationSection.tsx)
Change line 4 of "This is for you if…" from:
> "You dream of working in Maldives, Thailand, or Bali"

to:
> "You dream of working in Maldives, India, Thailand, Bali and many more"

### E. Testimonials (TestimonialsSection.tsx)
Replace the 3 AI-written testimonials with 3 real Google reviews from ScubaDiveIn's Google Business profile. Google blocked our automated fetch of the reviews page, so I need the review text from you (see question below). Once provided, I will:
- Replace name, quote, and "before/role" lines with real reviewer details
- Remove the AI-generated reviewer headshots (`testimonial-rahul/priya/arjun.jpg`) and replace with neutral initials avatars (circle with first letter) so we are not faking faces

## Open question
I need you to either paste 3 of your best Google reviews (reviewer name + review text), or paste the direct Google Maps/Business URL for ScubaDiveIn so I can fetch them. The link you shared was a search results page that requires CAPTCHA. Once I have the text I will wire them in.

## Files touched
- `src/components/landing/PricingSection.tsx`
- `src/components/landing/Footer.tsx`
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/FinalCTA.tsx`
- `src/components/landing/StickyMobileCTA.tsx`
- `src/components/landing/QualificationSection.tsx`
- `src/components/landing/TestimonialsSection.tsx`
- delete `src/assets/testimonial-*.jpg` after testimonials are replaced
