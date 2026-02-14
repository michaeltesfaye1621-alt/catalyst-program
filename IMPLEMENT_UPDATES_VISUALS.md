# Visual & UX Update Implementation Plan

This document outlines the systematic approach to updating the Catalyst Program landing page. The goal is to improve the narrative flow, visual hierarchy, consistency, and overall user experience.

## 1. Narrative & Page Flow
- [x] **Story Arc Reinforcement**
  - [x] Validate/Adjust section order: Problem → Authority → Process → Proof → Offer → Risk-reversal → CTA.
  - [x] Rename sections for better narrative (e.g., "Specialist" to "Who guides your recovery").
  - [x] Add bridging sentences or subtitles between sections for smooth transitions.
- [x] **Micro-CTAs Integration**
  - [x] Add 2–3 strategic micro-CTAs (e.g., after Roadmap, Case Studies, FAQ).
  - [x] Style micro-CTAs differently from primary CTAs (lighter weight/size).
  - [x] Link them to Pricing scroll or Booking Modal.
- [x] **Hero Messaging Refinement**
  - [x] Rewrite hero headline/subheadline for outcome focus.
  - [x] Add preview of the journey in the subcopy.
  - [x] Update hero CTA label to "Book Initial Assessment".

## 2. Visual Hierarchy & Typography
- [x] **Type Scale Standardization**
  - [x] Define consistent sizes for hero title, section titles, subheadings, and body.
  - [x] Apply scale across all components.
  - [x] Ensure muted section subtitles are visually distinct.
- [x] **Primary Color Usage Rationalization**
  - [x] Audit `text-primary`, `bg-primary`, and primary borders.
  - [x] Limit `bg-primary` to key CTAs and major highlights.
  - [x] Use `text-primary` only for key emphasis words.
- [x] **Readability Improvements**
  - [x] Constrain long text blocks to `max-w-2xl` or similar.
  - [x] Standardize vertical spacing between elements.
  - [x] Optimize mobile line-heights.

## 3. Layout & Component Consistency
- [x] **Card Language Unification**
  - [x] Align border-radius, width, and colors for Roadmap, Case Study, and Pricing cards.
  - [x] Apply standardized elevation states (flat, hover, featured).
- [x] **Icon Treatment Standardization**
  - [x] Standardize icon sizes (e.g., 24px or 32px) and containers (e.g., consistent circles).
  - [x] Align colors and background treatments.
- [x] **CTA Placement Logic**
  - [x] Place primary CTAs at Hero, Pricing, and Footer.
  - [x] Demote secondary CTAs to ghost or text styles.
  - [x] Ensure CTA visibility within one scroll length.

## 4. Animation & Motion
- [x] **Motion System Creation**
  - [x] Standardize timing (300-500ms), easing (ease-out-quad), and distances.
  - [x] Implement consistent patterns (reveal, reveal-up, staggered-cards).
- [x] **Attention Guidance**
  - [x] Hero: text → CTA/image (subtle delay).
  - [x] Staggered animations for Roadmap/Case Study lists.
- [x] **Reduced Motion Support**
  - [x] Add `motion-safe:` or `@media (prefers-reduced-motion)` guards to all animations.


## 5. Navigation, Language Toggle & Scrolling
- [x] **Nav Enhancement**
  - [x] Define top-level items: Process, Results, Pricing, FAQ.
  - [x] Implement smooth-scroll with `scroll-margin-top` to account for fixed header.
- [x] **Language Toggle Clarity**
  - [x] Standardized label: "Switch language to German/English".
  - [x] Prevent wrapping or layout breakage for longer localized text.
- [x] **Scroll Affordances**
  - [x] Add "scroll hint" (down arrow/indicator) at the hero bottom.

## 6. Mobile & Responsive Behavior
- [x] **Breakpoint Tuning**
  - [x] Manual testing/fixes at 360px, 768px, 1024px.
  - [x] Fix heading/price wrapping issues.
- [x] **Hero Mobile Optimization**
  - [x] Optimize text/image stack order.
  - [x] Ensure hero CTA is visible "above the fold" on common phone heights.
- [x] **Mobile CTA & Footer**
  - [x] Check for overlap between floating CTA and footer content/forms.
  - [x] Ensure adequate spacing and tap target sizing (min 44px).

## 7. Content Clarity & Trust Signals
- [x] **Outcome Highlighting**
  - [x] Add Results Summary (e.g., "75% Mobility Improvement") before pricing.
  - [x] Bold key stats in Case Studies.
- [x] **FAQ as Objection Handling**
  - [x] Reorder FAQs by priority/objections.
  - [x] Highlight the most critical FAQ (open by default).
- [x] **Pricing Framing**
  - [x] Add "Value Contrast" (e.g., vs traditional therapy).
  - [x] Clearly state "Next Steps" below the price.

## 8. Accessibility & Usability
- [x] **Contrast & Legibility**
  - [x] Check contrast ratios (WCAG AA).
  - [x] Verify light/dark mode readability.
- [x] **Keyboard & SR Support**
  - [x] Verify tab order for all interactive elements.
  - [x] Ensure visible focus states.
  - [x] Audit heading levels (h1 → h2 → h3).
- [x] **Media Accessibility**
  - [x] Audit all alt text.
  - [x] Ensure animations don't trigger discomfort.

## 9. Frontend Architecture (Refactoring)
- [x] **Section Configuration Source**
  - [x] Extract section metadata (id, title, label) into a central config.
  - [x] Sync nav and scroll targets to this config.
- [x] **Shared Section Patterns**
  - [x] Create a `SectionWrapper` or shared classes for container padding/spacing.
  - [x] Standardize background color variations.
- [x] **Motion Utilities**
  - [x] Centralize animation constants (duration, delay).

## 10. Optional Enhancements
- [ ] Scroll progress indicator.
- [ ] Floating summary card on desktop.
- [ ] Mini self-assessment quiz.

---

### Implementation Progress Tracking
| Phase | Focus | Status |
|---|---|---|
| Phase 1 | Foundation (Layout, Typography, Colors) | [x] |
| Phase 2 | Components (Cards, Icons, CTAs) | [x] |
| Phase 3 | Content & Narrative (Copy, Flow, Objections) | [x] |
| Phase 4 | Motion & UX (Animations, Nav, Mobile) | [x] |
| Phase 5 | Accessibility & Polish | [x] |
