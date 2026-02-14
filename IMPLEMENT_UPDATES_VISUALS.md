# Visual & UX Update Implementation Plan

This document outlines the systematic approach to updating the Catalyst Program landing page. The goal is to improve the narrative flow, visual hierarchy, consistency, and overall user experience.

## 1. Narrative & Page Flow
- [ ] **Story Arc Reinforcement**
  - [ ] Validate/Adjust section order: Problem → Authority → Process → Proof → Offer → Risk-reversal → CTA.
  - [ ] Rename sections for better narrative (e.g., "Specialist" to "Who guides your recovery").
  - [ ] Add bridging sentences or subtitles between sections for smooth transitions.
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
- [ ] **Nav Enhancement**
  - [ ] Define top-level items: Process, Results, Pricing, FAQ.
  - [ ] Implement smooth-scroll with `scroll-margin-top` to account for fixed header.
- [ ] **Language Toggle Clarity**
  - [ ] Standardized label: "Switch language to German/English".
  - [ ] Prevent wrapping or layout breakage for longer localized text.
- [ ] **Scroll Affordances**
  - [ ] Add "scroll hint" (down arrow/indicator) at the hero bottom.

## 6. Mobile & Responsive Behavior
- [ ] **Breakpoint Tuning**
  - [ ] Manual testing/fixes at 360px, 768px, 1024px.
  - [ ] Fix heading/price wrapping issues.
- [ ] **Hero Mobile Optimization**
  - [ ] Optimize text/image stack order.
  - [ ] Ensure hero CTA is visible "above the fold" on common phone heights.
- [ ] **Mobile CTA & Footer**
  - [ ] Check for overlap between floating CTA and footer content/forms.
  - [ ] Ensure adequate spacing and tap target sizing (min 44px).

## 7. Content Clarity & Trust Signals
- [ ] **Outcome Highlighting**
  - [ ] Add Results Summary (e.g., "75% Mobility Improvement") before pricing.
  - [ ] Bold key stats in Case Studies.
- [ ] **FAQ as Objection Handling**
  - [ ] Reorder FAQs by priority/objections.
  - [ ] Highlight the most critical FAQ (open by default).
- [ ] **Pricing Framing**
  - [ ] Add "Value Contrast" (e.g., vs traditional therapy).
  - [ ] Clearly state "Next Steps" below the price.

## 8. Accessibility & Usability
- [ ] **Contrast & Legibility**
  - [ ] Check contrast ratios (WCAG AA).
  - [ ] Verify light/dark mode readability.
- [ ] **Keyboard & SR Support**
  - [ ] Verify tab order for all interactive elements.
  - [ ] Ensure visible focus states.
  - [ ] Audit heading levels (h1 → h2 → h3).
- [ ] **Media Accessibility**
  - [ ] Audit all alt text.
  - [ ] Ensure animations don't trigger discomfort.

## 9. Frontend Architecture (Refactoring)
- [ ] **Section Configuration Source**
  - [ ] Extract section metadata (id, title, label) into a central config.
  - [ ] Sync nav and scroll targets to this config.
- [ ] **Shared Section Patterns**
  - [ ] Create a `SectionWrapper` or shared classes for container padding/spacing.
  - [ ] Standardize background color variations.
- [ ] **Motion Utilities**
  - [ ] Centralize animation constants (duration, delay).

## 10. Optional Enhancements
- [ ] Scroll progress indicator.
- [ ] Floating summary card on desktop.
- [ ] Mini self-assessment quiz.

---

### Implementation Progress Tracking
| Phase | Focus | Status |
|---|---|---|
| Phase 1 | Foundation (Layout, Typography, Colors) | [ ] |
| Phase 2 | Components (Cards, Icons, CTAs) | [ ] |
| Phase 3 | Content & Narrative (Copy, Flow, Objections) | [ ] |
| Phase 4 | Motion & UX (Animations, Nav, Mobile) | [ ] |
| Phase 5 | Accessibility & Polish | [ ] |
