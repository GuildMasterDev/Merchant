# Merchant Directory

A curated directory of e-commerce resources for entrepreneurs launching online
businesses — marketplaces, print-on-demand, payment processors, shipping,
marketing, and design tools. Available as a cross-platform Electron desktop app
and as an installable progressive web app.

**Live demo:** <https://guildmasterdev.github.io/Merchant>

## Features

- **30+ curated resources** across 7 categories
- **Dark themed UI** with commerce-gold (#f59e0b) accents, card-based grid layout
- **Live search** across resource names, descriptions, features, and categories
- **Category filters** with per-category resource counts
- **Offline-capable PWA** — installable to the home screen, cached for offline use
- **Electron desktop app** — cross-platform builds for macOS, Windows, Linux
- **External links** open in the system browser (desktop) or a new tab (web)

## Live web demo & PWA

The `web/` directory contains a self-contained, single-file web version of the
directory. It is deployed to GitHub Pages on every push to `main` via GitHub
Actions and can be installed as a progressive web app (Add to Home Screen on
iOS / Install App on desktop Chrome, Edge, etc.).

- `web/index.html` — entire app in a single file (HTML, CSS, JS inline)
- `web/manifest.json` — PWA manifest with 192/512 icons
- `web/sw.js` — cache-first service worker (`merchant-v1`), offline fallback
- No external dependencies, no build step, no network required after first load

## Resource categories

- **Marketplaces** — Etsy, Amazon Handmade, eBay, Facebook Marketplace
- **Print on Demand** — Printful, Printify, Redbubble, Spring, Society6
- **E-commerce Platforms** — Shopify, WooCommerce, Square Online, BigCommerce, Wix
- **Payment Processing** — Stripe, PayPal, Square
- **Marketing Tools** — Mailchimp, Hootsuite, Google Ads, Meta Ads
- **Design Tools** — Canva, Adobe Creative Cloud, Figma, PicMonkey
- **Shipping & Fulfillment** — ShipStation, Pirate Ship, FBA, ShipBob, Easyship

## Installation

### Web demo / PWA

Just visit <https://guildmasterdev.github.io/Merchant> and (optionally) install
it as an app. No setup required.

### Desktop app (development)

**Prerequisites:** Node.js 18+, npm

```bash
git clone https://github.com/GuildMasterDev/Merchant.git
cd Merchant
npm install
npm start
```

### Desktop app (distributable builds)

```bash
npm run pack    # unpacked build for testing
npm run dist    # packaged installers for the current platform
```

Build outputs land in `dist/`. See the `build` field in `package.json` for
target and icon configuration.

## Tech stack

- **Electron 41** — cross-platform desktop runtime
- **electron-builder 26** — packaging for macOS (dmg/zip), Windows (nsis/portable), Linux (AppImage/deb/rpm)
- **Vanilla JavaScript** — no framework dependencies, no build step
- **Service Worker + Web Manifest** — PWA offline support and installability
- **GitHub Actions** — CI (syntax + JSON validation) and Pages deploy

## Project structure

```
Merchant/
├── main.js           # Electron main process
├── preload.js        # Preload script (contextIsolation)
├── renderer.js       # Desktop renderer logic
├── index.html        # Desktop entry HTML
├── styles.css        # Desktop styles
├── assets/           # App icons (png, ico, icns)
├── web/              # Self-contained web demo / PWA
│   ├── index.html    # Single-file app
│   ├── manifest.json
│   ├── sw.js
│   ├── icon-192.png
│   └── icon-512.png
├── .github/workflows/
│   ├── ci.yml        # syntax + manifest validation
│   └── deploy-web.yml  # GitHub Pages deploy
└── package.json
```

## Contributing

Pull requests are welcome. Resource additions should include a real, current
URL, a short description, and a handful of key features.

## License

MIT — see [LICENSE](LICENSE).

## Support

Issues and suggestions: <https://github.com/GuildMasterDev/Merchant/issues>
