# Live Website

A single-page, shareable website that embeds Literal Life Church's [live stream video player](https://github.com/literal-life-church/video-player). Its purpose it to be a fully contained website that is easy to share on social media via its OpenGraph metadata and hosted with a quick, memorable link to write down and share for others to visit.

## Prerequisites

- [Node.js LTS](https://nodejs.org/en/download)
- [Cloudflare account](https://dash.cloudflare.com/sign-up)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (installed automatically via `npm install`)

## Local Setup

```bash
git clone git@github.com:literal-life-church/live-website.git
cd live-website

npm install
npm run dev
```

The site will be available at `http://localhost:4321/`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Build the production site to `./dist/` |
| `npm run deploy` | Build and deploy directly to Cloudflare Workers |
| `npm run dev:astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run dev:preview` | Build and preview the production site locally before deploying |
| `npm run dev:types` | Regenerate TypeScript types from `wrangler.jsonc` bindings |

## Deployment

Cloudflare's native build pipeline automatically builds and deploys preview versions of this site on every push.
