# Sathvika Kotha — Portfolio

A React + TypeScript + Tailwind CSS portfolio built from the resume content in `src/data/resume.ts`. Every fact
on the site (projects, skills, experience, certifications) traces back to that one file — edit it there and the
whole site updates.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site in `dist/`, which you can deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Things to finish before you publish

1. **Add your resume PDF.** Drop it in `public/resume.pdf`, then update the `href="#"` in
   `src/components/Contact.tsx` (the "Download resume (PDF)" button) to `href="/resume.pdf"` and add a
   `download` attribute.
2. **Add project visuals.** Each project card in `src/components/Projects.tsx` has a labeled placeholder (e.g.
   `[Add Japanese Temple VR screenshot here]`). Replace the placeholder `<div>` with an `<img>` once you have
   real screenshots, mockups, or a short clip/GIF.
3. **Double-check links.** LinkedIn and GitHub URLs live in `src/data/resume.ts` under `profile`.

## Structure

```
src/
  data/resume.ts       — single source of truth for all content
  components/          — one component per section
  hooks/useReveal.ts   — scroll-triggered reveal animation
  index.css            — Tailwind + global styles
  App.tsx              — assembles the page
```
