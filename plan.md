# Portfolio Update Plan

## Goal

Keep the overall portfolio black, white, and neutral while letting the interactive website preview show expressive color palettes independently. Preserve readable, high-contrast calls to action.

## Phase 1 — Core priorities (complete)

1. **Independent demo colors:** The interactive preview has six distinct complementary palettes—blue, teal, warm editorial, plum, emerald, and pearl/gold—controlled within its own component styles, independent of the portfolio theme.
2. **Monochrome portfolio theme:** The global theme uses black, white, and neutral grays in both light and dark appearance; paragraph copy remains on bright, readable panels.
3. **Remove service entries:** Removed the “AI integrations” and “Automations & workflows” service rows, retaining “Websites & digital experiences.” Other project/build content remains unchanged.
4. **Clear CTA:** Preserved the high-contrast CTA treatment and increased the preview CTA label to 16px, its minimum height to 56px, and supporting note text to 14px.

## Phase 2 — Responsive and interaction polish (complete)

- On phones, show all six palette controls in a two-column grid rather than hiding later choices in a horizontal strip. Controls have a 48px minimum tap height.
- Increase supporting preview text to a 12px minimum in the mock cards and small print, use a 16px business-name input to prevent mobile browser zoom, and keep the demo CTA at 16px.
- Use proximity scroll snapping for the wider picker and disable it under reduced-motion preferences; palette transitions also honor reduced motion.
- Keep focus-visible outlines and pressed-state semantics for keyboard operation of the style buttons.

## Implementation approach and project structure

No new dependencies or assets were needed. The preview and its isolated styling live in `app/WebsiteDemo.tsx` and `app/WebsiteDemo.module.css`; the main palette and paragraph panels live in `app/globals.css`; service composition is in `app/page.tsx`. Preserve unrelated portfolio sections unless requested later.

## Current validation

`npm run lint`, `npm run build`, and `git diff --check` pass.


## Website security hardening plan (approved; production remediation complete, dev-only follow-up open)

### Current baseline

- The public portfolio is a statically rendered Next.js app on Vercel. The source review found no API routes, authentication, database, server actions, or forms. The interactive business-name preview stays in client state; its WhatsApp message is created only when the visitor clicks the CTA.
- The app has no environment-variable references; `.env*` files are ignored. External links opened in new tabs use `rel="noreferrer"`.
- Vercel already sends HTTPS HSTS. The live response does not currently include a Content Security Policy, `X-Content-Type-Options`, `Referrer-Policy`, or `Permissions-Policy`. It also includes `Access-Control-Allow-Origin: *`; because the page is public and has no API, first verify where this header comes from before deciding whether to change it.
- The baseline full audit reported 19 findings (one critical, eight high, ten moderate); production-only had six (one critical, four high, one moderate). After Phase 1, `npm audit --omit=dev` reports zero, and the full audit has no critical/high findings. Eight moderate package findings remain in the development-only TypeScript-ESLint chain because `minimatch@10.2.6` is flagged by GHSA-g3hv-75wg-m249. npm's proposed `eslint-config-next@15.5.29` fix is a major downgrade from 16.x and was not applied.

### Phase 1 result

- Updated `next` and `eslint-config-next` to 16.4.5 and `tailwindcss` plus `@tailwindcss/postcss` to 4.3.4; refreshed the lockfile and applied compatible non-major transitive fixes.
- A clean `npm ci`, `npm run lint`, `npm run build`, and local production preview (HTTP 200 with the homepage content marker) pass. The remaining moderate finding is documented rather than forcing an incompatible lint-tool downgrade.

### Ordered implementation

1. **Patch production dependencies first.** Update `next` and its matching `eslint-config-next` together to a supported patched 16.x release; refresh the lockfile and resolve affected transitive packages without blindly using `npm audit fix --force`. Re-run the production audit, existing lint/build checks, and a local smoke preview. Keep the dependency update isolated so it is easy to revert.
2. **Add baseline browser security headers.** Configure headers in `next.config.ts` for `X-Content-Type-Options: nosniff`, a strict-origin referrer policy, and a restrictive Permissions Policy for unused device capabilities. Preserve Vercel-managed HSTS instead of duplicating it. Investigate the wildcard CORS header; retain or narrow it only according to its source and actual need.
3. **Trial CSP in report-only mode.** Draft a policy based on the app's actual Next.js assets, theme initializer, and font loading. Test in a browser and against the Vercel deployment; do not enforce a strict policy until it causes no legitimate breakage. There is no report-collection endpoint today, so use local/browser diagnostics rather than introducing a paid service. Decide on `frame-ancestors` only after confirming whether the site must be embeddable.
4. **Enable account/repository protections using built-in controls.** Turn on MFA/passkeys and save recovery codes for GitHub, Vercel, and the domain registrar. Enable available dependency alerts/security updates and secret scanning/push protection for the public repository. Keep the existing direct-push-to-`main` workflow unless Adam explicitly chooses PR-only branch protection; that setting can block the current deployment flow.
5. **Defer backend-specific controls until needed.** The current site has no endpoint requiring rate limiting, CSRF protection, or server-side input validation. If a form/API is added later, use server-side validation, rate limits/spam controls, a narrow CORS allowlist, and server-only secrets (never expose secrets in `NEXT_PUBLIC_*`).

### Credit-efficient execution and rollback

Use the existing GitHub/Vercel features and project checks; do not add a paid scanner, new monitoring service, or a duplicate CI workflow unless the existing Vercel build check proves insufficient. Validate each code phase with one dependency audit, one lint/build pass, one local preview, and a targeted live-header check. Commit each phase separately; revert the relevant commit or use Vercel's deployment rollback if a change breaks the site. Account MFA, recovery codes, and any branch-protection choice require Adam's direct account action/confirmation.
