# Theme & MUI

## How the theme is structured

There are two theme objects exported from `src/theme/index.ts`:

- **`basicTheme`** — defines the design tokens: palette, breakpoints, typography, and spacing. Import this when you need to reference token values inside a `styles.ts` file (e.g. `basicTheme.breakpoints.up("tablet")`).
- **`theme`** — extends `basicTheme` with MUI component overrides (`MuiButton`, `MuiTypography`, `MuiContainer`, etc.). This is the one passed to `ThemeProvider` in the app root. Never import `theme` just to read a color or breakpoint — use `basicTheme`.

---

## Before starting the project

Update `src/theme/index.ts`:

1. **Palette** — replace placeholder colors in `mainPalette`, `accentPalette`, `gradientsPalette`, and `systemPalette` with final brand values.
2. **Typography** — adjust font sizes and line heights per the design spec. Custom font families (RockStarBold, RockStarMedium, ProbaProFont) must be loaded in `public/index.html` or via `@font-face` in global CSS before they will render correctly.
3. **Component overrides** — the `theme` object already resets common MUI defaults (padding on `MuiButton`, `MuiList`, `MuiListItem`; `transform: scale(1)` on `MuiSkeleton`; `maxWidth: false` on `MuiContainer`). Add new component-level defaults here, not inline in components.

---

## Palette reference

```
mainPalette.white / black / primary / primaryLight / primaryDark
accentPalette.green1 / green2 / blue2 / blue3 / blue4 / yellow1
systemPalette.red / lightRed
gradientsPalette.gradient1…gradient5 / aiGradient / redGradient / yellowGradient
  (+ Reverse variants for most gradients)
```

Access in styles: `basicTheme.palette.mainPalette.primary`

---

## Breakpoints

| Name    | px   |
|---------|------|
| mobile  | 0    |
| tablet  | 744  |
| laptop  | 1240 |
| desktop | 1440 |
| large   | 1920 |

Usage: `basicTheme.breakpoints.up("tablet")`  
The standard MUI names (`xs`, `sm`, `md`, `lg`, `xl`) are **not** used in this project.

---

## Typography variants

All `<Typography>` components default to `variant="bodyText"` and `color="#000"` (set in the `MuiTypography` override).

| Variant                   | Font              | Size | Weight |
|---------------------------|-------------------|------|--------|
| `h1`                      | RockStarBold      | 24px | 700    |
| `h2`                      | RockStarBold      | 20px | 700    |
| `h3`                      | RockStarBold      | 18px | 700    |
| `h4`                      | RockStarMedium    | 18px | 500    |
| `h5`                      | ProbaProFont      | 16px | 400    |
| `h6`                      | RockStarBold      | 45px | 700    |
| `h5Secondary`             | RockStarBold      | 16px | 400    |
| `bodyText` *(default)*    | ProbaProFont      | 14px | 400    |
| `inputFields`             | ProbaProFont      | 14px | 400    |
| `buttonText`              | RockStarMedium    | 14px | 500    |
| `buttonTextBold`          | RockStarBold      | 14px | 700    |
| `buttonTextSmall`         | RockStarMedium    | 12px | 500    |
| `buttonTextSmallSecondary`| ProbaProFont      | 12px | 500    |
| `caption`                 | ProbaProFont      | 12px | 400    |

---

## Spacing

Base unit is **4px**. MUI's `spacing(n)` = `n × 4px`.  
In `sx` props, numeric values map to the spacing scale: `mt: 3` = `12px`.

---

## Styling components

### Always use the wrappers in `src/ui/`

Every MUI primitive has a thin re-export in `src/ui/` (e.g. `ui/Box`, `ui/Typography`, `ui/Button`). Import from there, not directly from `@mui/material`. This keeps a single seam to add project-wide prop defaults later.

### Extract styles to a sibling `styles.ts`

Co-locate a `styles.ts` next to each component. Use the `SxStyles` type (from `types/styles.d.ts`) to type the styles object:

```ts
import { SxStyles } from "types/styles";
import { basicTheme } from "theme";

export const styles: SxStyles = {
  root: {
    backgroundColor: basicTheme.palette.mainPalette.primary,
    [basicTheme.breakpoints.up("tablet")]: {
      padding: 8,
    },
  },
};
```

Apply in JSX via the `sx` prop:

```tsx
<Box sx={styles.root} />
```

Merge with external `sx` via spread:

```tsx
<Box sx={{ ...styles.root, ...sx } as SxProps} />
```

### Do not use inline styles or CSS files

All styling goes through the MUI `sx` prop and `styles.ts` files. Do not use `style={{}}`, CSS modules, or plain `.css` files.

---

## Default MUI overrides already in place

These are reset globally — do not re-apply them in component styles:

| Component     | Override                                                   |
|---------------|------------------------------------------------------------|
| `MuiButton`   | `padding: 0`, `textTransform: none`, disabled colors set   |
| `MuiIconButton` | `padding: 0`                                             |
| `MuiList` / `MuiListItem` | `padding: 0`                                 |
| `MuiSkeleton` | `transform: scale(1)` (prevents the default squish)        |
| `MuiContainer`| `maxWidth: false`, `padding: 16px` (40px from tablet up)   |
| `MuiLink`     | `textDecorationColor: unset`, `textUnderlineOffset: 1.5`   |
| `MuiTypography` | default variant `bodyText`, default color `#000`         |
