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