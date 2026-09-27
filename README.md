# GK Fashion World & Kalpana Bridal Studio
### Apple-Inspired Mobile-First Haute Couture & Bridal Atelier Web Application

[![Deploy to GitHub Pages](https://github.com/actions/workflows/deploy.yml/badge.svg)](https://github.com)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite)](https://vitejs.dev/)
[![Swiper.js](https://img.shields.io/badge/Swiper-11.x-6332F6?logo=swiper)](https://swiperjs.com/)

A modern, ultra-responsive web application designed for mobile devices. Built for **GK Fashion World** and **Kalpana Bridal Studio** (Dindigul, Tamil Nadu), uniting three authentic bridal crafts:
1. **Saree Pre-Pleating & Box Folding:** Ready-to-wear precision pleats, crisp ironed borders, and moisture-shield box packaging.
2. **Kalpana HD Bridal Artistry:** Verified three-tier packages (Basic HD ₹6,000, Advanced HD ₹9,000, Premium HD ₹10,000).
3. **GK Fashion World Designer Aari Needlecraft:** Hand-embroidered Lord Krishna feet motifs, cutwork blouses, zardosi, and royal sleeve styling.

---

## 📱 Publishing to GitHub & GitHub Pages (Step-by-Step)

This project has been pre-configured with:
- Relative asset paths (`base: './'`) in `vite.config.js`
- Automated GitHub Actions CI/CD workflow in `.github/workflows/deploy.yml`
- Clean production build tested via `npm run build`

### Option 1: Instant GitHub Pages via GitHub Actions (Recommended)
1. Initialize git and commit your files (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: complete apple mobile-first bridal website"
   ```
2. Create a new repository on your GitHub account (e.g., `gk-fashion-world`).
3. Add remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/gk-fashion-world.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to:
   **Repository Settings → Pages → Build and deployment → Source**: Select **GitHub Actions**.
5. Within 60 seconds, GitHub Actions will build and publish your site at:
   `https://<your-username>.github.io/gk-fashion-world/`

### Option 2: Deploying via `dist/` Branch
If you prefer deploying the built `dist` folder:
```bash
npm run build
# Deploy the contents of the dist folder to the gh-pages branch
```

---

## 🎨 Design System & Architectural Standards

Any developer or AI IDE working on this project should adhere to the following core guidelines:

### 1. Color Palette & Tokens (Defined in `:root` inside `style.css`)
- **Backgrounds:** `--ios-bg: #FBFBFD;` (Subtle off-white titanium), `--ios-surface: #FFFFFF;`, `--ios-surface-soft: #F5F5F7;`
- **Text:** `--ios-text: #1D1D1F;` (Apple off-black), `--ios-secondary: #6E6E73;`, `--ios-muted: #86868B;`
- **Heritage Gold Accents:** `--gold-primary: #C59B27;`, `--gold-rich: #B3861B;`, `--gold-gradient: linear-gradient(135deg, #ECC870 0%, #C59B27 50%, #9A7416 100%);`
- **Borders & Dividers:** `--ios-border: rgba(0, 0, 0, 0.08);`, `--ios-border-subtle: rgba(0, 0, 0, 0.04);`

### 2. Apple Squircle Radii
- Small tags/badges: `var(--radius-sm)` (10px)
- Cards & tiles: `var(--radius-md)` (16px) or `var(--radius-lg)` (24px)
- Hero slides & bento boxes: `var(--radius-xl)` (32px)
- Pills, story rings & buttons: `var(--radius-full)` (9999px)

### 3. Hero Carousel Guidelines
- Clean, unobstructed edge-to-edge photography.
- **NO floating text descriptions or badges** over the hero slides.
- Smooth Swiper.js pagination with expanding gold pill indicators.

### 4. Video Reels Autoplay Standard
- Uses HTML5 `<video>` elements with:
  ```html
  <video class="reel-video-player" src="./videos/blouse_m1.mp4" autoplay loop muted playsinline webkit-playsinline preload="auto"></video>
  ```
- All videos must be **muted** by default to comply with iOS Safari and Android Chrome autoplay policies.
- An `IntersectionObserver` in `app.js` pauses off-screen videos and resumes visible videos.
- Sound toggles allow one-tap unmute (`🔇` / `🔊`).

### 5. Verified Service Integrity
- **Saree Draping:** Only authentic descriptions of Saree Pre-Pleating, Box Folding, and Ready-to-Wear preparation. Never advertise false claims (such as "2-minute draping").
- **Makeup Pricing:** Strictly matches the official studio rate card (₹6,000 / ₹9,000 / ₹10,000).
- **Aari Work:** Handcrafted needlecraft by `@gk_fashion_world`.

---

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── blouse/                     # GK Fashion World Aari embroidery photography
│   ├── m1/                     # Signature Lord Krishna feet motif blouse
│   ├── m2/ - m5/               # Neckline, back cutwork, bridal sleeves
├── makeup/                     # Kalpana Bridal Studio photography
│   ├── m1/                     # High-fashion bridal look
│   ├── m2/ - m4/               # Temple jada hair styling, airbrush finish
│   └── price catlog/           # Official studio price rate card
├── saree draping/              # Saree pre-pleating stages & box fold photos
├── videos/                     # High-definition MP4 reel video footages
│   ├── blouse_m1.mp4           # Krishna feet embroidery reel
│   └── blouse_m4.mp4           # Bridal sleeve zari needlework reel
├── index.html                  # Semantic, accessible HTML5 structure
├── style.css                   # Modular Apple design tokens & component styles
├── app.js                      # Swiper initialization, dedicated model slideshows, autoplay logic
├── vite.config.js              # Vite bundler configuration (relative base './')
├── package.json                # Project dependencies and npm scripts
└── README.md                   # This project guide and architecture documentation
```

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server (port 3000)
npm run dev

# 3. Build optimized production bundle
npm run build
```

---

## 📞 Studio Contact & Verification
- **Booking Hotline:** `+91 8925112709`
- **WhatsApp Desk:** [Chat on WhatsApp](https://wa.me/918925112709)
- **Instagram - Bridal Makeup:** [@kalpana_makeup_artist_dgl](https://www.instagram.com/kalpana_makeup_artist_dgl)
- **Instagram - Aari Needlework:** [@gk_fashion_world](https://www.instagram.com/gk_fashion_world)
- **Location:** Dindigul, Tamil Nadu, India
