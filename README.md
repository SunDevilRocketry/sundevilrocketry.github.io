# Sun Devil Rocketry website

A Vite + React + TypeScript site for the Sun Devil Rocketry club.

## Quick start

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Project structure

- `src/pages/` — route-level page layouts
- `src/components/` — reusable UI pieces like the site header/footer
- `src/data/` — content registry and JSON-driven site data
- `src/types/` — shared TypeScript models
- `src/index.css` — theme variables, layout utilities, and section styling
- `public/` — static images and logo assets
- `tailwind.config.js` — the Tailwind palette and design tokens

## Easy customization points

### Theme / brand colors
Update the palette in `tailwind.config.js` and the matching CSS variables in `src/index.css`.

### Page content
Edit the JSON files in `src/data/` to change projects, members, or hero slides.

### Section styling
Most section appearance is controlled in `src/index.css`, including:
- background/text themes
- spacing helpers
- card styles
- footer/layout rules

### Branding assets
Replace files in `public/` and `public/img/` to change logos and imagery without editing app logic.

## Notes

This project is intentionally organized so content, styling, and assets are easy to maintain:
- content lives in data files
- design tokens live in the theme config
- layout logic lives in components and pages
- static media stays under `public/`

That makes it easier to push to a fresh repository and keep the project maintainable over time.
