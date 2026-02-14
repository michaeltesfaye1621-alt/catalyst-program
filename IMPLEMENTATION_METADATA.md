# Website Metadata & SEO Implementation Plan

This document outlines the steps to replace placeholder Lovable branding with custom project metadata and high-fidelity social sharing assets.

## 1. Visual Asset Generation
- [ ] **Capture Project Snapshot**
  - [ ] Use a browser subagent to capture a high-resolution screenshot of the landing page (Hero area).
  - [ ] Optimize the image (dimensions: 1200x630px for OpenGraph).
  - [ ] Save as `public/og-image.png`.
- [ ] **Favicon Package**
  - [ ] Ensure `favicon.ico` is relevant (currently placeholder).
  - [ ] (Optional) Generate `apple-touch-icon.png` and manifest for mobile bookmarks.

## 2. Robust SEO Metadata (HTML)
- [ ] **Title & Description Refinement**
  - [ ] Optimize `<title>` for primary keywords: "The Catalyst", "Physiotherapy", "Biomechanical Recovery".
  - [ ] Expand `<meta name="description">` to include key outcomes (e.g., "75% mobility improvement").
- [ ] **Canonical & Localized Tags**
  - [ ] Add `<link rel="canonical" href="https://www.thecatalystphysio.com" />`.
  - [ ] If multi-language is active, add `hreflang` tags for EN/DE.
- [ ] **Technical Tags**
  - [ ] Set `theme-color` for mobile browser bars.
  - [ ] Update `author` and `robots` meta tags.

## 3. Social Media (Open Graph & Twitter)
- [ ] **Clean Open Graph Tags**
  - [ ] Replace `og:image` path from Lovable URL to local `/og-image.png`.
  - [ ] Add `og:site_name`, `og:locale`, and `og:url`.
- [ ] **Twitter Card Optimization**
  - [ ] Change `twitter:site` from `@Lovable` to project handle or remove.
  - [ ] Set `twitter:card` to `summary_large_image`.
  - [ ] Update `twitter:image` to local `/og-image.png`.

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
| Phase 1 | Visual Assets (Snapshot/OG Image) | [ ] |
| Phase 2 | Global SEO Tags (Description, Keywords) | [ ] |
| Phase 3 | Social Integration (OG/Twitter) | [ ] |
| Phase 4 | Technical Polish (Favicon, Robots) | [ ] |
