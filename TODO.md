# Website Security Hardening — TODO

## Outcome: Remediate production dependencies (Phase 1 — complete)

- Updated `next` and `eslint-config-next` together to 16.4.5; updated `@tailwindcss/postcss` and `tailwindcss` to 4.3.4; refreshed the lockfile and applied compatible non-major transitive fixes.
- The production-only audit now reports zero vulnerabilities. The full audit has zero critical/high findings and only the development-toolchain residual recorded below.
- A clean `npm ci`, `npm run lint`, `npm run build`, and local production-preview smoke check (HTTP 200 with homepage content present) pass. No force upgrade or major downgrade was used.

## Outcome: Resolve remaining dev-toolchain advisory (Phase 1 follow-up — open)

- The full audit still flags eight moderate package findings that trace to `minimatch@10.2.6` under `@typescript-eslint/typescript-estree@8.72.1` through `eslint-config-next@16.4.5`. The advisory is GHSA-g3hv-75wg-m249 (globparts-amplification denial of service); it is in development tooling, not the production dependency graph.
- Resolve this when a compatible patched Next.js 16 / ESLint-config 16 toolchain is available, or after proving a compatible override. Do not downgrade `eslint-config-next` to 15.5.29 or force a minimatch major override without compatibility evidence.

## Outcome: Add baseline security headers (Phase 2 — open)

- Configure `X-Content-Type-Options: nosniff`, a strict-origin referrer policy, and a restrictive Permissions Policy for unused device capabilities.
- Preserve Vercel-managed HSTS instead of duplicating it.
- Identify the source and need for the live `Access-Control-Allow-Origin: *` header; retain or narrow it only based on that finding and the site's actual public-static use.
- Confirm the intended headers appear on the deployed portfolio response.

## Outcome: Trial a compatible CSP without breaking the site (Phase 3 — open)

- Add a `Content-Security-Policy-Report-Only` policy that accounts for the actual Next.js scripts/assets, the inline theme initializer, and font loading.
- Test the policy in a browser and against the deployed site; keep it report-only until legitimate app behavior works without CSP violations.
- Do not add a paid reporting service; no collection endpoint currently exists. Decide on `frame-ancestors` only after confirming whether the portfolio must be embeddable.

## Outcome: Enable repository and account protections (Phase 4 — owner action required)

- Enable MFA/passkeys and securely store recovery codes for GitHub, Vercel, and the domain registrar.
- Enable available dependency alerts/security updates and secret scanning/push protection for the public GitHub repository.
- Preserve direct pushes to `main` unless Adam explicitly opts into PR-only branch protection, which could change the current deployment workflow.

## Outcome: Defer server/API controls until that surface exists (Phase 5 — deferred)

- The current site has no API/form requiring rate limiting, CSRF protection, or server-side input validation. If a form or API is added, validate inputs on the server, add rate limits/spam controls, restrict CORS to intended origins, and keep secrets server-only (never in `NEXT_PUBLIC_*`).

## Cost and rollback constraints

- Prefer existing GitHub/Vercel features and project checks; do not add paid scanners, new monitoring services, or duplicate CI without a demonstrated need.
- Validate each code phase with one focused audit, the existing lint/build checks, a local preview, and targeted live-header checks. Commit phases separately and revert the relevant commit or Vercel deployment if validation fails.
