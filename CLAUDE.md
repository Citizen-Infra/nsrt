# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Novi Sad Relational Tech (NSRT) — community tools crafted by, with, and for Novi Sad residents. Part of [Citizen Infrastructure Builders](https://github.com/Citizen-Infra).

**Live site:** [nsrt.netlify.app](https://nsrt.netlify.app)

## Commands

```bash
# Deploy to Netlify (after pushing to GitHub)
npx netlify deploy --prod

# Generate OG image (requires Node.js and Puppeteer)
npm install
node generate-og-image.js
```

The OG image script uses Puppeteer to screenshot `og-image.html` at 1200x630 and saves to `og-image.png`.

## Architecture

This is a static landing page with no build step — just `index.html` served directly by Netlify.

**Trilingual support (EN/SR/RU):**
- Language toggle buttons in top-right corner
- Content elements have `data-lang="en|sr|ru"` attributes
- CSS shows/hides content based on `body.sr` or `body.ru` class
- Preference saved to localStorage (`nsrt-lang`)
- Auto-detects browser language on first visit

**Key CSS patterns:**
```css
[data-lang="sr"], [data-lang="ru"] { display: none !important; }
body.sr [data-lang="en"], body.sr [data-lang="ru"] { display: none !important; }
body.sr [data-lang="sr"] { display: block !important; }
```

## Related Projects

| Project | Description |
|---------|-------------|
| [dear-neighbors](https://github.com/Citizen-Infra/dear-neighbors) | Chrome extension — neighborhood dashboard |
| [my-community](https://github.com/Citizen-Infra/my-community) | Chrome extension — community dashboard with Bluesky |
| [community-admin](https://github.com/Citizen-Infra) | Admin platform for organizers (WIP) |

## Design Principles

- **Neighbor-to-neighbor, not citizen-to-government.** Strengthen bonds between residents, not reporting tools for authorities.
- **Village-scale, not city-scale.** Scope tools to a block, building, or mesna zajednica.
- **Interoperable small tools over one platform.** Use shared feed formats so tools can publish and consume local data independently.
- **Remix, don't reinvent.** Adapt existing [RTP patterns](https://www.relationaltechproject.org/remix) to Novi Sad's context.
- **Pedagogical by design.** Every interaction should teach users to think collectively.
- **Sovereignty-preserving.** Communities maintain control over their tools and data.
