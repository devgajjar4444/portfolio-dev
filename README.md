# Dev Gajjar — Portfolio

Responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Run

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy on Vercel

The Next.js app is inside `web/`. Vercel must build from that folder.

1. **Settings** → **General** → **Root Directory** → set to `web` → **Save**
2. **Settings** → **Build and Deployment** → reset overrides to defaults:
   - Framework Preset: **Next.js**
   - Build Command: *(empty — use default)*
   - Install Command: *(empty — use default)*
   - Output Directory: *(empty — use default)*
3. **Deployments** → **Redeploy** (uncheck "Use existing Build Cache")

| Error | Cause |
|-------|-------|
| `404: NOT_FOUND` | Root Directory is `/` instead of `web` |
| `next: command not found` | Root Directory is `/` — deps install at repo root, not in `web/` |

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
