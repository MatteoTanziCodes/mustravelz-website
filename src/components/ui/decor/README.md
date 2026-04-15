# Decorative SVG System

## Naming

- React components live in `src/components/ui/decor/`
- Raw file assets live in `public/assets/ornaments/`
- Component names are PascalCase and semantic:
  - `SectionDivider`
  - `CornerOrnament`
  - `RouteLine`
  - `CompassMotif`
  - `ArchFrame`
  - `LanternIcon`
  - `ScrapbookTape`

## Placement

All SVG components accept `placement` where it makes sense:

- `top-left`
- `top-right`
- `bottom-left`
- `bottom-right`
- `top`
- `right`
- `bottom`
- `left`
- `center`

## Tone

All SVG components accept `tone`:

- `gold`
- `olive`
- `brown`
- `cream`
- `ink`

## What belongs where

### React components

Use components for ornaments that benefit from:

- semantic props
- dynamic color/tone changes
- placement control
- composition inside cards and section headers

### Raw SVG files in `public/`

Keep static assets as raw files when they are:

- large ornamental corners
- masks and clips
- decorative edge trims
- repeated background flourishes
- non-interactive art that should be referenced by CSS or `next/image`
