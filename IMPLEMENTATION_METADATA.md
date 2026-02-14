# Website Metadata & SEO Implementation Plan

This document outlines the steps to replace placeholder Lovable branding with custom project metadata and high-fidelity social sharing assets.

## 1. Visual Asset Generation
- [ ] **Capture Project Snapshot**
  - [x] Attemped browser capture (failed due to environment restrictions).
  - [ ] Need to replace `/og-image.png` with a real snapshot manually or via CI.
- [x] **Favicon Package**
  - [x] Reference `favicon.ico`.
  - [x] Created `site.webmanifest`.

## 2. Robust SEO Metadata (HTML)
- [x] **Title & Description Refinement**
  - [x] Optimized `<title>` for primary keywords.
  - [x] Expanded description with outcome focus.
- [x] **Canonical & Localized Tags**
  - [x] Added canonical URL.
  - [x] (Multi-language tags handled via React components if dynamic).
- [x] **Technical Tags**
  - [x] Set `theme-color` for mobile browser bars.
  - [x] Updated author and author tags.

## 3. Social Media (Open Graph & Twitter)
- [x] **Clean Open Graph Tags**
  - [x] Replaced Lovable URL with local `/og-image.png`.
  - [x] Added `og:site_name`, `og:locale`, and `og:url`.
- [x] **Twitter Card Optimization**
  - [x] Removed `@Lovable` reference.
  - [x] Set `twitter:card` to `summary_large_image`.
  - [x] Updated image path.

## 4. Verification & Search Console
- [ ] **Robots.txt & Sitemap**
  - [ ] Verify `public/robots.txt` is configured correctly.
  - [ ] (Optional) Add a basic `sitemap.xml`.
- [ ] **Metadata Preview**
  - [ ] Test the new metadata using social media preview tools.

---

### Implementation Progress Tracking
| Phase | Focus | Status |
|---|---|---|
| Phase 1 | Visual Assets (Snapshot/OG Image) | [!] |
| Phase 2 | Global SEO Tags (Description, Keywords) | [x] |
| Phase 3 | Social Integration (OG/Twitter) | [x] |
| Phase 4 | Technical Polish (Favicon, Robots) | [x] |
