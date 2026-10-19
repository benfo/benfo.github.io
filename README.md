# benfourie.com

Personal website and portfolio for **Ben Fourie**, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Customizing Content

All personal information, bio paragraphs, focus areas, projects, and social links live in a single structured file:

- [`src/config/site.ts`](./src/config/site.ts)

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server at http://localhost:4321
npm run dev

# Build static production site into ./dist
npm run build

# Preview production build locally
npm run preview
```

## GitHub Pages & Custom Domain (`benfourie.com`)

1. **GitHub Repository Settings**:
   - Go to **Settings → Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
   - Pushing to `main` (or `master`) will trigger [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) and publish the site automatically.
2. **Custom Domain (`public/CNAME`)**:
   - [`public/CNAME`](./public/CNAME) is pre-configured with `benfourie.com`.
   - At your DNS provider for `benfourie.com`, add the GitHub Pages apex `A` records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Optionally add a `CNAME` record for `www` pointing to `<your-github-username>.github.io`.
   - Enable **Enforce HTTPS** in **Settings → Pages** once DNS propagates.
