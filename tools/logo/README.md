# Logo generation

Renders the Coastal Workflows logo lockup (wave mark + wordmark) to a PNG for
use in email signatures and other off-site places. This is **not** part of the
website build — the generated PNG is intentionally kept out of `public/`.

## Files

- `logo-lockup.svg` — the source artwork (mirrors the wave mark in
  `src/components/Logo.astro`, plus the "Coastal Workflows" wordmark).
- `generate.mjs` — rasterizes the SVG to `coastal-logo.png`.
- `coastal-logo.png` — generated output (git-ignored; regenerate any time).

## Usage

```bash
node tools/logo/generate.mjs
```

Output: `tools/logo/coastal-logo.png` — 1020×216, transparent background, 3×
retina. Uses Source Serif 4 SemiBold for the wordmark (auto-downloaded to
`~/.fonts` on first run).

## Email signature

See `docs/email-signatures.html` for ready-to-paste signature blocks. The
simplest path is to upload `coastal-logo.png` directly in Gmail's signature
editor (Gmail re-hosts it), rather than linking to a hosted URL.
