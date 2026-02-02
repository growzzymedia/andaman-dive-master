
# Updates Based on Client Insights & Zero to Hero Package Document

## Overview
This plan addresses the client's feedback to update pricing with a strikethrough discount effect and correct the Rescue Diver phase to include Emergency First Response (EFR) information.

---

## 1. Pricing Section Updates

### Current State
The pricing shows:
- One-Time: ₹2,36,000 (incl. GST)
- 2 Months: ₹2,20,000 (excl. GST)
- 3 Months: ₹2,40,000 (excl. GST)
- 6 Months: ₹2,70,000 (excl. GST)

### Changes Based on PDF Document

| Plan | Updated Price | Structure | GST Note |
|------|---------------|-----------|----------|
| One-Time | ~~₹2,50,000~~ → ₹2,36,000 | Pay in full | Incl. GST |
| 2 Months | ₹2,75,000 | ₹1,37,500 × 2 | Incl. GST |
| 3 Months | ₹3,00,000 | ₹1,00,000 × 3 | Incl. GST |
| 6 Months | ₹3,36,000 | ₹56,000 × 6 | Incl. GST |

### Visual Changes
- Add strikethrough styling on ₹2,50,000 for one-time payment
- Show ₹2,36,000 as the discounted price in green/accent color
- Update all EMI plans to show "incl. GST" (per PDF - all installments include GST)
- Update footer note accordingly

**File to modify:** `src/components/landing/PricingSection.tsx`

---

## 2. Course Timeline - Rescue Diver + EFR Update

### Current State
Phase 3 shows:
- Title: "Rescue Diver"
- Duration: "3-4 days"
- Description: "Emergency response & problem-solving underwater"

### Changes Based on PDF Document
The PDF clearly separates:
- **EFR (Emergency First Response)**: 1 Day
- **Rescue Diver**: 3-4 Days

### Option A (Client preferred): Combine in one phase
Update Phase 3 to show:
- Title: "Rescue Diver + EFR"
- Duration: "4-5 days" (3-4 days Rescue + 1 day EFR)
- Description: "Emergency First Response training + underwater rescue skills and problem-solving"

### Option B: Mention separately
- Title: "Rescue Diver"
- Duration: "3-4 days + 1 day EFR"
- Description: "1-day Emergency First Response (EFR) training + 3-4 days underwater rescue & emergency management"

I'll implement Option A as it's cleaner while still showing the 4-5 day total.

**File to modify:** `src/components/landing/CourseTimeline.tsx`

---

## Technical Implementation Details

### PricingSection.tsx Changes

```text
Updated plans array structure:
{
  name: "One-Time Payment",
  originalPrice: "₹2,50,000",  // New field for strikethrough
  total: "₹2,36,000",
  structure: "Pay in full",
  popular: false,
  savings: "Best Value",
  gstNote: "incl. GST",
}
```

Add strikethrough styling:
```text
{plan.originalPrice && (
  <p className="text-lg text-muted-foreground line-through">
    {plan.originalPrice}
  </p>
)}
<p className="font-display text-3xl font-bold text-primary">
  {plan.total}
</p>
```

### CourseTimeline.tsx Changes

Update Phase 3 object:
```text
{
  phase: 3,
  title: "Rescue Diver + EFR",
  duration: "4-5 days",
  description: "1-day Emergency First Response (EFR) + 3-4 days underwater rescue & emergency management skills",
  color: "bg-primary/60",
  image: phaseRescue,
}
```

---

## Summary of Changes

| Component | Change |
|-----------|--------|
| PricingSection.tsx | Add strikethrough ₹2,50,000, update all prices per PDF, change all plans to "incl. GST" |
| CourseTimeline.tsx | Update Phase 3 to include EFR with updated duration (4-5 days) |

---

## Files to Modify
1. `src/components/landing/PricingSection.tsx`
2. `src/components/landing/CourseTimeline.tsx`
