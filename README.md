# सूर्यपुरा ग्राम विकास पोर्टल

Fictional rural development portal demo for skill assessment.

## Live Demo

**Submission URL:** https://suryapura-gram-vikas.netlify.app

Export routes:
- https://suryapura-gram-vikas.netlify.app/export/hero
- https://suryapura-gram-vikas.netlify.app/export/post1
- https://suryapura-gram-vikas.netlify.app/export/post2

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Export Assets (for submission)

Open these routes and screenshot (or use `npm run capture`):

| Asset | URL | Size |
|-------|-----|------|
| Hero Banner | `/export/hero` | 1920×800 |
| Social Post 1 | `/export/post1` | 1080×1080 |
| Social Post 2 | `/export/post2` | 1080×1080 |

Save screenshots to `exports/` folder.

## Mobile Screenshot

1. Run `npm run dev`
2. Chrome DevTools → Toggle device toolbar → iPhone 12 (390px)
3. Open http://localhost:5173
4. Screenshot above-the-fold + pillars section
5. Save as `exports/mobile-home.png`

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

```bash
npx vercel --prod
```

Or connect this repo to [vercel.com](https://vercel.com) — `vercel.json` handles SPA routing.

## Assessment Checklist

- [x] Homepage (live)
- [x] 1 Hero Banner (`/export/hero`)
- [x] 2 Social Media Posts (`/export/post1`, `/export/post2`)
- [x] Mobile view (capture via DevTools)
- [x] Design rationale (`DESIGN_RATIONALE.txt`)

## Tech Stack

Vite + React + TypeScript + Tailwind CSS v4 + Noto Sans Devanagari + Lucide icons
# DemoTask
