# Clarivat FZ-LLC — Marketing Website

An award-style, single-page-scroll marketing site for **Clarivat FZ-LLC**, a
RAKEZ-licensed business advisory firm in Ras Al Khaimah, UAE.

Built with **Next.js 16 (App Router) + TypeScript**, **Tailwind CSS v4**,
**Framer Motion**, **Lenis** smooth scroll, and **lucide-react** icons. Display
type is **Poppins** (loaded via `next/font`).

> Note: `create-next-app@latest` now installs Next.js 16 (the prompt asked for
> 15). The App Router code is identical and deploys to Vercel with zero config.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build / preview:

```bash
npm run build
npm run start
```

## Deploy

Push to a Git repo and import into **Vercel** — no configuration needed. Or run
`npx vercel`.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, metadata, providers (SmoothScroll, CustomCursor, Nav, Footer)
│  ├─ template.tsx      # per-route page transition
│  ├─ page.tsx          # homepage — assembles all sections
│  ├─ globals.css       # ← brand theme tokens + animations live here
│  ├─ about/page.tsx
│  ├─ services/page.tsx
│  └─ contact/page.tsx
├─ components/
│  ├─ Nav.tsx           # sticky nav + full-screen mobile overlay
│  ├─ Hero.tsx          # word-by-word headline reveal, gradient blob
│  ├─ Marquee.tsx       # infinite scrolling keyword strip
│  ├─ About.tsx         # statement text + stat grid
│  ├─ Services.tsx      # interactive service cards
│  ├─ Process.tsx       # sticky "how we work" steps
│  ├─ CTA.tsx           # full-bleed call-to-action
│  ├─ Contact.tsx       # validated form (no backend) + map placeholder
│  ├─ Footer.tsx        # big logotype + nav columns
│  ├─ PageHeader.tsx    # shared hero for /about, /services, /contact
│  ├─ SmoothScroll.tsx  # Lenis provider
│  ├─ CustomCursor.tsx  # desktop-only cursor dot
│  ├─ MagneticButton.tsx
│  └─ RevealText.tsx    # masked word reveal + Reveal wrapper
└─ data/
   └─ site.ts           # ← ALL editable content (company, services, nav, etc.)
```

## Where to edit

- **Content** (company name, phone, address, services, process steps, marquee
  words, stats): [`src/data/site.ts`](src/data/site.ts).
- **Colors & theme tokens** (`--color-ink`, `--color-paper`, `--color-teal`,
  `--color-cyan`, fonts, animations): the `@theme` block at the top of
  [`src/app/globals.css`](src/app/globals.css). Changing those variables
  re-skins the entire site. Tailwind v4 exposes them as utilities automatically
  (`bg-ink`, `text-teal`, `from-teal`, `to-cyan`, …).

## Accessibility & performance

- `prefers-reduced-motion` disables Lenis, the custom cursor, the blob and the
  marquee, and collapses all transitions.
- Custom cursor only activates on fine-pointer (desktop) devices.
- Semantic HTML, visible focus rings, `aria-label`s, and form validation.
- Fonts loaded with `next/font` (no layout shift); all routes prerender static.

## Placeholders to replace before launch

1. **Logo** — currently the wordmark `Clarivat.` (text). Drop a real SVG/PNG in
   `public/` and swap it into `Nav.tsx` / `Footer.tsx` if you have a logo asset.
2. **Contact form endpoint** — `Contact.tsx` validates client-side and shows a
   success state but does **not** send anywhere. Wire `handleSubmit` to a real
   endpoint (e.g. Formspree, Resend, or a Next.js route handler / server action).
3. **Map embed** — `Contact.tsx` has a styled placeholder; replace with a Google
   Maps / Mapbox `<iframe>` for the RAKEZ address.
4. **Email address** — `hello@clarivat.ae` in `site.ts` is a placeholder; set
   the real inbox.
5. **Domain** — `metadataBase` in `layout.tsx` is set to `https://clarivat.ae`;
   update if the live domain differs.

## Dev tooling note

`.claude/launch.json` contains a machine-specific Node path used by the local
preview tool on this Windows machine. It has no effect on `npm run dev`/`build`
or on Vercel — you can delete it.
