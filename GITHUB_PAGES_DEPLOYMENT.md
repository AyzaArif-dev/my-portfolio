# Portfolio - GitHub Pages Deployment Guide

This portfolio has been converted to a GitHub Pages compatible static site. All features including dark/light mode, smooth scrolling, animations, and responsiveness are preserved.

## Deployment Instructions

### Step 1: Build the Static Site
```bash
npm run build
```
This generates the static export in the `out/` directory.

### Step 2: Push to GitHub

#### Option A: Deploy from `out/` folder (Recommended)
1. Commit and push your code to GitHub
2. Go to your repository settings
3. Navigate to **Settings > Pages**
4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select your main branch
   - Folder: Select `/out`
5. Click Save

#### Option B: Use GitHub Actions (Automatic)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Step 3: Configure GitHub Pages
1. Go to your repository
2. Settings > Pages
3. Select "GitHub Actions" as the source
4. Your portfolio will deploy automatically on every push to main

## Project Structure

- `app/` - Next.js pages and layouts (static exportable)
- `components/` - React components (all client-side compatible)
- `public/` - Static assets (images, icons, etc.)
- `out/` - Generated static export (created after build)

## Features Preserved

✓ Dark/Light mode toggle with next-themes
✓ Smooth scrolling between sections
✓ Blinking cursor animation
✓ Responsive design (mobile & desktop)
✓ Terminal-inspired aesthetic
✓ Contact form with Formspree integration
✓ All animations and transitions

## No Server-Side Features

The following Vercel-specific features have been removed:
- Vercel Analytics
- Server-side API routes
- Server-side rendering (SSR)

All functionality is now purely static and client-side.

## Local Testing

To test the static build locally:
```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000` to preview the static site.

## Notes

- The `output: 'export'` configuration in `next.config.mjs` enables static export
- All components use client-side state management (React hooks)
- The Formspree endpoint handles contact form submissions
- Images are unoptimized for compatibility with static exports
