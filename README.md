# Interview Test 1 – Full‑stack developer (Next.js Focus)

Stripe‑inspired landing page using **Next.js 14 (App Router)**, **Tailwind CSS**, and **framer‑motion**, with a maintenance‑mode toggle and SEO best practices.

## Getting Started

```bash
pnpm i   # or npm i / yarn
cp .env.example .env
pnpm dev
```

Build and run:

```bash
pnpm build && pnpm start
```

### Maintenance mode

Set `MAINTENANCE_MODE=true` in `.env` (or Vercel Project Env) to redirect all routes to `/maintenance` via middleware.

### Tech & Best Practices

- App Router, `metadata` API (SEO, OG, Twitter)
- Responsive, accessible, keyboard‑friendly
- Gradients & effects inspired by Stripe
- Optimized media: `next/image`, `<video>` with `preload="metadata"` and `poster`
- Core Web Vitals minded: fast first render, minimal CLS
- Clean, modular components

### Deploy on Vercel

1. Push to GitHub.
2. Import the repo in Vercel.
3. Add env `NEXT_PUBLIC_SITE_URL` and optional `MAINTENANCE_MODE`.
4. Deploy.

### Notes

- Replace `/public/images/sque-dashboard.png`, `/public/images/og.jpg`, and `/public/videos/demo.mp4` with real assets.
- Update copy to match Sque’s content.
