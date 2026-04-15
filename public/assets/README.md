# Texture Asset System

This folder is reserved for reusable non-code visual assets used by layered parchment, paper, map, and scrapbook treatments.

## Folder map

- `textures/`
- `patterns/`
- `maps/`
- `ornaments/`
- `masks/`

## Placeholder filenames to add later

### `textures/`

- `parchment-base.webp`
- `parchment-fibers.webp`
- `paper-overlay-soft.webp`
- `card-fade-grain.webp`

### `patterns/`

- `speckle-subtle.png`
- `dot-grid-soft.png`
- `scrapbook-crosshatch.png`

### `maps/`

- `map-fragment-world-01.webp`
- `map-fragment-route-01.webp`
- `map-fragment-vintage-01.webp`

### `ornaments/`

- `corner-filigree-top-left.svg`
- `corner-filigree-top-right.svg`
- `divider-compass.svg`
- `stamp-crest.svg`

### `masks/`

- `torn-edge-bottom.svg`
- `torn-edge-side.svg`
- `fade-soft-mask.svg`
- `paper-rip-mask.svg`

## Wiring notes

When real assets are added, point the CSS variables in `src/app/globals.css` at the final file paths.

Example:

```css
:root {
	--texture-asset-parchment: url("/assets/textures/parchment-base.webp");
	--texture-asset-paper-overlay: url("/assets/textures/paper-overlay-soft.webp");
}
```
