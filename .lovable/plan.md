# EHPSA — Static Website Plan

A static, single-page website for the **Ethiopian Health Profession Students Association (EHPSA)** — a non-governmental, non-profit local organization for health profession students across Ethiopia. The site's primary goal is to **inform visitors and build trust** about who EHPSA is, its mission, history, and legal standing.

## Design Direction (confirmed)

- **Palette — "Ethiopian Health"**: deep emerald green `#0a3d2e` + forest green `#1a6b4a` + warm gold `#c9a84c` + cream `#f5f0e0`. Conveys health + Ethiopian national identity.
- **Typography**: Sora (headings) + Manrope (body). Modern, professional, readable.
- **Layout — Hero + Card Grid**: hero banner up top, then a grid of cards for mission/programs/about/contact.
- Primary goal: Inform & build trust (mission, history, legal standing, leadership).

## Design Tokens (src/styles.css)

Map the confirmed palette into the existing token system using `oklch`:

```css
:root {
  --primary: oklch(0.32 0.09 160);          /* #0a3d2e emerald */
  --primary-glow: oklch(0.45 0.10 158);     /* #1a6b4a forest */
  --accent: oklch(0.78 0.12 85);            /* #c9a84c gold */
  --background: oklch(0.97 0.015 90);       /* #f5f0e0 cream */
  --foreground: oklch(0.22 0.03 160);       /* dark green-black */
}
```

- `--font-display: "Sora", sans-serif;` and `--font-body: "Manrope", sans-serif;`
- Load both fonts via `<link>` in `src/routes/__root.tsx` head (Google Fonts). Never `@import` a URL in styles.css.
- Add a gold gradient `--gradient-primary` and a soft `--shadow-elegant` for premium card elevation.

## Content Sections (top → bottom)

The page is a single route (`src/routes/index.tsx`) rendered as stacked full-width bands with the hero-grid composition:

1. **Header / Nav bar** — Logo (EHPSA monogram) + name, nav links (About, Mission, Programs, Chapters, Contact), and a "Become a Member" button linking to Telegram.
2. **Hero** — Full-width hero with a background image (generated), headline: "Empowering Ethiopia's future health professionals", subtext about EHPSA being a registered non-profit for all health profession students, and two CTAs: "Learn about us" (scroll) + "Join us" (Telegram). Trust badges: "Registered NGO · No. 4506" and "Since 2011 E.C".
3. **About / Who We Are** — Card grid (3 cards): (a) Who we are — non-governmental, non-profit, local organization with legal personality; (b) Legal standing — registered in 2011 E.C, registration No. 4506 under the civil society organization proclamation; (c) For whom — all health profession students in Ethiopia.
4. **Mission & Vision** — Two-column section: Mission (advance health profession students' education, unity, and service) and Vision (a strong, united community of health professionals serving Ethiopia). Includes core values (Unity, Professionalism, Service, Integrity) as small chips.
5. **Programs / What We Do** — Card grid (4 cards) with icons: Capacity building & training, Community health outreach, Networking & mentorship, Advocacy for students. Each card has a short description.
6. **Chapters / Branches** — Horizontal scroll or grid of branch cards: Addis Ababa (HQ), Gonder, and a note about expanding to more universities. Link to the Gonder Telegram.
7. **Leadership / Trust** (optional compact) — A simple statement or small grid of the executive committee (placeholders, since real names/photos would be provided). Keeps the "build trust" goal without fabricating people.
8. **Contact / Connect** — A band with three social channels as cards: LinkedIn, Telegram (EHPSAGonder), Facebook. Plus a contact CTA. Each card links out to the provided URLs.
9. **Footer** — Logo, short tagline, quick links, social icons, registration note, copyright.

## Features (at most 5)

1. **Responsive single-page brochure site** — fully responsive hero + card-grid layout, mobile nav, smooth-scroll anchor navigation. Static, no backend.
2. **Mission, legal-standing & about content** — the trust-building core: who EHPSA is, registration No. 4506, 2011 E.C, non-profit status.
3. **Programs & chapters showcase** — card grids describing activities and listing branches (Addis Ababa HQ, Gonder).
4. **Social channel connector cards** — LinkedIn, Telegram, Facebook cards that link out directly to the provided profiles.
5. **SEO + share metadata** — per-route `head()` with descriptive title, description, OG/Twitter tags, semantic HTML, alt text on images, JSON-LD `NGO` structured data for search visibility.

## Routes / File Structure

Static site — no backend, no database, no auth.

- `src/routes/index.tsx` — the single landing page (replaces the placeholder). Sections 1–9 above.
- `src/routes/__root.tsx` — update head() meta (title, description, OG tags) and add the Google Fonts `<link>` for Sora + Manrope.
- `src/styles.css` — add the "Ethiopian Health" palette tokens, font tokens, gradient, shadow.
- `src/components/site/` — small presentational components: `Header.tsx`, `Hero.tsx`, `AboutCards.tsx`, `MissionVision.tsx`, `Programs.tsx`, `Chapters.tsx`, `Connect.tsx`, `Footer.tsx`, plus a `Section` wrapper.
- `src/assets/` — generated hero image + program/section imagery (generated via imagegen, no external stock photos).

## Images (generated, not stock)

- Hero background — Ethiopian health students / medical community in an Ethiopian context.
- About / Programs section imagery — supporting visuals (training, community outreach, networking).
- Logo monogram — "EHPSA" wordmark/monogram in the green/gold palette (transparent PNG).

## SEO & Metadata

- `__root.tsx` head: title "EHPSA — Ethiopian Health Profession Students Association", description summarizing the non-profit + registration, `og:type: website`, `twitter:card`.
- index.tsx gets its own `head()` too (unique title/description, og:title/og:description) per guidelines.
- JSON-LD `NGO` schema with name, founding date, area served (Ethiopia), same-as links to the three social profiles.
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), alt text on all images, lazy loading.

## Out of scope (not building)

- No login/auth, no database, no forms that POST to a backend (the "Join" CTA links to Telegram).
- No events calendar with real data (the Programs section describes activities statically).
- Leadership section stays generic until real names/photos are provided.

## Build & verification

- After implementing, run a production build to confirm no errors.
- Drive a Playwright check against localhost:8080: take screenshots of hero, each section, and mobile viewport to confirm the layout renders and the palette/typography applied.
- Verify social links point to the exact provided URLs.
