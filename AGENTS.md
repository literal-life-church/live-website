# AGENTS.md for Live Website

This project is a single-page, shareable website for Literal Life Church's live streams, built with [Astro](https://astro.build/) and deployed to Cloudflare Workers as a static site via [Wrangler](https://developers.cloudflare.com/workers/wrangler/).

The granular capabilities of this project are listed below:

- Embeds our [video-player](https://github.com/literal-life-church/video-player), auto-configured against our [media-api](https://github.com/literal-life-church/media-api) instance
- Browser-delivered push notification scripts/shims
- OpenGraph metadata for on-brand sharing
- 404 handling
- Fully minified HTML, CSS, and JS in production builds (`vite.build.minify` in `astro.config.mjs`)
- SEO optimization with `robots.txt` and `sitemap.xml`

## Development

When starting the dev server, use background mode:

```
npm run dev --background
```

Manage the background server with `npm run dev:astro dev stop`, `npm run dev:astro dev status`, and `npm run dev:astro dev logs`.

## Commands Useful in Development

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Build the production site to `./dist/` |
| `npm run deploy` | Build and deploy directly to Cloudflare Workers |
| `npm run dev:astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run dev:preview` | Build and preview the production site locally before deploying |
| `npm run dev:types` | Regenerate TypeScript types from `wrangler.jsonc` bindings |

Do not run `npm run deploy` or `wrangler deploy` — that deploys directly to production. Deployments are handled by Cloudflare's build pipeline against pushed branches, currently configured for preview builds only.

## Known Quirks

- `scripts/strip-legacy-env.mjs` runs automatically as a `postbuild` step. `@astrojs/cloudflare` (currently the latest release, 14.1.3) generates `dist/client/wrangler.json` via a bundled `@cloudflare/vite-plugin` that still writes the removed `legacy_env` field, which the project's own (newer) `wrangler` now rejects outright. Don't remove this script until the upstream fix ([withastro/astro#17412](https://github.com/withastro/astro/pull/17412)) is merged and released.

## Tech Stack

This project is rather basic in its needs.

- Runs on Node.js. We always use the latest LTS version as listed on the [official download page](https://nodejs.org/en/download).
- NPM is our package manager.
- Most `npm run` commands are wrappers on top of [Cloudflare's Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/).
- Project runs on the **Cloudflare Workers** runtime.
- Key libraries:
  - [Astro](https://astro.build/) — web frontend framework
  - [Vite](https://vite.dev/) — Underlying build tool used by Astro and the Wrangler CLI
- 100% TypeScript.
- No unit, integration, or E2E tests.

## Docs, LLMs, and MCP

Here are all of the resources we use for documentation:

**Human-readable docs:**

- All Cloudflare: <https://developers.cloudflare.com/>
- Astro: <https://docs.astro.build/>
- Cloudflare Workers: <https://developers.cloudflare.com/workers/>
- Vite: <https://vite.dev/>

**LLMs.txt:**

- All Cloudflare: <https://developers.cloudflare.com/llms.txt>
- Cloudflare Workers: <https://developers.cloudflare.com/workers/llms.txt>
- Vite: <https://vite.dev/llms.txt>

**MCP:**

- Astro: <https://mcp.docs.astro.build/mcp>
