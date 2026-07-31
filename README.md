# Bangla Radio

A fast, mobile-first web radio player for Bangladesh and Bengali FM stations. Built with vanilla HTML/CSS/JS — zero dependencies, instant load.

### [Live Demo →](https://shamim-ashraf.github.io/Bangla-Radio/)

## Features

- **25+ stations** — Bangladesh FM, Islamic, Kolkata Bengali, BBC, and sports coverage
- **One-tap play** — No signup, no app download
- **PWA** — Installable, offline shell, lock screen controls
- **Sleep timer** — 15m / 30m / 60m auto-off
- **Favorites** — Long-press to save, synced via localStorage
- **Auto-reconnect** — Handles network drops and slow connections
- **~20KB** — No frameworks, inline critical CSS, service worker cache

## Tech

| Layer | Stack |
|-------|-------|
| UI | Vanilla CSS, Hind Siliguri font, CSS-only animations |
| Audio | HTML5 Audio API, Media Session API |
| Offline | Service Worker, PWA manifest |
| SEO | Schema.org (WebApp, FAQ, HowTo, ItemList), Open Graph, sitemap.xml |
| Analytics | GoatCounter (privacy-friendly, no cookies) |
| Hosting | GitHub Pages |

## Project Structure

```
├── index.html          # Single-page app (HTML + inline CSS + SEO)
├── script.js           # App logic (stations, player, favorites, media session)
├── sw.js               # Service worker (offline cache)
├── manifest.json       # PWA manifest
├── icon-192.png        # App icon (192x192)
├── icon-512.png        # App icon (512x512)
├── og.svg              # Open Graph social card
├── sitemap.xml         # Search engine sitemap
├── robots.txt          # Crawler directives
├── llms.txt            # AI search engine content
└── LICENSE             # MIT
```

## License

MIT © [Shamim Ashraf](https://github.com/shamim-ashraf)
