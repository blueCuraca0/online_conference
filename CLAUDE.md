# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # dev server
npm run build   # production build
npm test        # run tests
```

## Architecture

**Create React App** (react-scripts 5) with TypeScript strict mode. `baseUrl: "src"` enables absolute imports.

### Directory Structure

- `src/pages/` — Page-level route components
- `src/modules/` — Feature modules (e.g. `HomeModule/components/HomeSection/`)
- `src/components/` — Shared reusable components
- `src/ui/` — MUI wrapper components (30+ thin wrappers over Material-UI primitives)
- `src/theme/` — MUI theme config (colors, typography, breakpoints)
- `src/api/` — Axios instance with Bearer token injection and 401/403 refresh logic
- `src/hooks/` — Custom React hooks
- `src/types/` — Shared TypeScript types

### Routing

React Router v6. Routes are defined in `src/Routing.tsx`. Pages are lazy-loaded and wrapped with `LazyLoadPage` (Suspense boundary). Default redirect: `/` → `/Home`.

### Styling

MUI v5 with Emotion (sx prop). Styles live in co-located `styles.ts` files using the `SxStyles` type. Reference theme values via `basicTheme.palette.*` and `basicTheme.breakpoints.up("tablet")` — avoid hardcoding colors or breakpoint values.

**Custom breakpoints:** `mobile` (0), `tablet` (744), `laptop` (1240), `desktop` (1440), `large` (1920).

**Custom fonts:** RockStarBold/RockStarMedium (headings, buttons), ProbaProFont (body).

### Component Patterns

- Functional components with TypeScript props interfaces
- Enum-based variant props (e.g. `EButtonType.PRIMARY`)
- Styles extracted to a sibling `styles.ts` file

### State Management

Zustand is installed for global state stores.

### Forms

React Hook Form + Yup for schema validation.
