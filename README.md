# Dev Gajjar — Portfolio

Responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Project structure

```
portfolio-dev/
├── src/           # Next.js app (pages, components, data)
├── public/        # Static assets
├── mobile/        # Expo React Native app (separate)
├── package.json   # Web app dependencies
└── ...
```

## Run (web)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy on Vercel

The Next.js app is at the **repo root**. Vercel auto-detects it — no Root Directory override needed.

1. Framework Preset: **Next.js** (auto-detected)
2. Build Command / Install Command / Output Directory: leave as defaults
3. If you previously set Root Directory to `web`, **clear it** (set back to `/`)
4. Redeploy

## Run (mobile)

```bash
cd mobile
npm install
npx expo start
```

## Features

- Scroll-aware navigation (active section highlights on scroll)
- Interactive skills section with marquee + category tabs
- Working project carousel with swipe, arrows, dots & thumbnails
- Fully responsive — optimized for mobile and desktop
- 3.5+ years experience, 11 projects, updated Technource role

## Contact

- **Email:** devgajjar0132@gmail.com
- **Phone:** 9974440132
- **LinkedIn:** https://www.linkedin.com/in/dev-gajjar
