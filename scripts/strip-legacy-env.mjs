// @astrojs/cloudflare (currently 14.1.3, the latest release) generates
// dist/client/wrangler.json via its bundled @cloudflare/vite-plugin, which
// still pins wrangler@4.107.0 internally and writes `legacy_env: true` into
// that file, matching pre-4.112 defaults.
//
// wrangler 4.112.0 removed the legacy_env config field entirely and now
// hard-errors if the key is present at all, regardless of its value:
// https://github.com/cloudflare/workers-sdk/pull/14620
//
// Our deploy step runs the project's own wrangler (kept current, not pinned
// back), so it chokes on the exact file the build step just produced. A fix
// is in flight upstream (bumps the bundled @cloudflare/vite-plugin so it
// stops emitting the field) but is not yet merged/released as of writing:
// https://github.com/withastro/astro/pull/17412
//
// Until that lands, strip the field ourselves as a postbuild step so the
// generated config matches what wrangler 4.112+ expects.
import { readFileSync, writeFileSync } from 'node:fs';

const configPath = 'dist/client/wrangler.json';
const config = JSON.parse(readFileSync(configPath, 'utf8'));

delete config.legacy_env;

writeFileSync(configPath, JSON.stringify(config));
