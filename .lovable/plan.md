

# The Catalyst Physio – High-Conversion Landing Page

## Overview
A single-page, dark-mode React application designed to convert visitors into booked sessions. Clean clinical aesthetic with Electric Teal accents, authority-driven copy, and one clear goal: **fill the calendar**.

---

## Design System

| Element | Value |
|---------|-------|
| Background | `#0A0A0A` (Deep Black) |
| Cards/Surfaces | `#141414` (Rich Charcoal) |
| Accent | `#00D1D1` (Electric Teal) |
| Typography | Inter, bold headlines, balanced text-wrap |
| Animations | CSS fade-in on scroll, hover card lifts, smooth anchor scrolling |

---

## Page Sections

### 1. Navigation (Sticky Header)
- Logo: **THE CATALYST** (left)
- Single CTA button: **Start Program** → anchors to Pricing section

---

### 2. Hero Section
**Layout:** Split – text left, placeholder image right

- **Headline:** *"Stop Managing Pain. Start Your Transformation."*
- **Sub-headline:** *"A 12-week biomechanical blueprint designed by Dr. Aris Thorne to reclaim your peak performance."*
- **Primary CTA:** "Book Your Session" → opens booking modal

---

### 3. The Specialist Section – "The Catalyst Method"
**Content:**
- Professional bio of Dr. Aris "The Catalyst" Thorne
- Photo placeholder (circular frame with teal accent ring)
- **Pull quote:** *"Recovery isn't just about getting back to zero; it's about exceeding your previous peak."*
- Credentials: Expert Clinical Physiotherapist · Germany · Biomedical Approach

---

### 4. The 3-Phase Roadmap
**Layout:** 3-column card grid (stacks on mobile)

| Phase 1: IGNITE | Phase 2: REBUILD | Phase 3: SUSTAIN |
|-----------------|------------------|------------------|
| Relief & Inflammation Control | Functional Mobility & Strength | Performance & Injury Proofing |

Each card with icon, title, and 2-line description.

---

### 5. Social Proof – Case Studies
**Layout:** 3-column grid of testimonial cards

- Patient initials (privacy-first)
- 2-line success quote
- Electric Teal progress bar showing "Mobility Restored %"

---

### 6. FAQ Section (Accordion)
Handles common objections:
- **Insurance:** "What about health insurance coverage?"
- **Time Commitment:** "How much time does this take daily?" (Answer: ~15 min)
- **Delivery Model:** "How does the App + Concierge model work?"

---

### 7. Pricing Section – "Program Investment"
**Layout:** Centered

**Primary Card:**
- **The 12-Week Catalyst Program** – €2,350
- Features: Biomechanical Blueprint, 24/7 Concierge Messaging, Custom App Video Portal
- CTA: "Start Program"

**Secondary Option (below):**
- Text link: "Initial Diagnostic Assessment – €295"

---

### 8. Conversion Footer
- Headline: *"Ready for your last first session?"*
- Electric Teal CTA button: "Book Your Session" → opens booking modal

---

### 9. Booking Modal
**Form fields:**
- Full Name
- Email
- Phone Number
- Preferred service (Dropdown: 12-Week Program / Diagnostic Assessment)
- Message (optional)
- Submit → Saves to Supabase `inquiries` table

Confirmation toast: "Thank you! Dr. Thorne's team will contact you within 24 hours."

---

## Mobile Optimizations
- Sticky bottom CTA bar: "Start Program" button always visible
- Responsive card stacking
- Smooth scroll behavior

---

## Backend (Supabase)
- **Table:** `inquiries` – stores all form submissions
- **Edge Function:** Receives form data, validates with Zod, inserts into DB
- No authentication required (public inquiry form)

---

## Files to Create
- `src/pages/Index.tsx` – Main landing page with all sections
- `src/components/` – Hero, Specialist, Roadmap, CaseStudies, FAQ, Pricing, Footer, BookingModal
- `supabase/migrations/` – Create `inquiries` table
- `supabase/functions/submit-inquiry/` – Edge function for form submission
- `src/index.css` – Updated with custom dark theme colors

---

## Outcome
A conversion-focused, mobile-optimized landing page that positions Dr. Thorne as the authority and makes booking frictionless. Every element pushes toward one action: **Book your session.**

