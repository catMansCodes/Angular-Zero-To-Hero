# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200
npm run build      # Production build
npm run watch      # Dev build in watch mode
npm test           # Unit tests with Karma/Jasmine
ng generate component <path/name>  # Generate a new standalone component
```

To run a single test file, use:
```bash
ng test --include="**/component-name.spec.ts"
```

## Architecture

This is an Angular 19 learning curriculum ("Zero to Hero") with **18 interactive feature modules**, each demonstrating a specific Angular concept. The app uses standalone components exclusively (no NgModules).

### Layout Structure

```
AppComponent
├── HeaderComponent
├── LayoutComponent
│   ├── SideNavBarComponent  ← navigation links to all 18 modules
│   └── MainContentComponent ← <router-outlet> renders feature modules
└── FooterComponent
```

### Feature Modules (routes)

All 18 learning modules live under `src/app/layout/main-content/` and are registered in [src/app/app.routes.ts](src/app/app.routes.ts):

| Route | Topic |
|---|---|
| `/home` | Landing page |
| `/overview` | Angular intro |
| `/angular-components` | Component basics |
| `/life-cycle` | Lifecycle hooks |
| `/data-binding` | Interpolation, property/event/two-way binding |
| `/directives` | Built-in directives |
| `/pipes` | Built-in & custom pipes |
| `/signals` | Angular Signals & computed() |
| `/routing` | Router, params, queryParams |
| `/profile/:id/:name` | Route params demo |
| `/forms` | Forms overview |
| `/reactive-form-employee` | Reactive Forms + Validators |
| `/template-form-employee` | Template-driven forms |
| `/service-di` | Services & DI |
| `/apis` | HttpClient & external APIs |
| `/performance` | Change detection, OnPush |
| `/state` | State management |
| `/testing` | Testing strategies |
| `/build-deploy` | Build & deployment |

### Key Files

- [src/app/app.config.ts](src/app/app.config.ts) — providers: `provideRouter`, `provideHttpClient`, `provideAnimationsAsync`
- [src/app/app.routes.ts](src/app/app.routes.ts) — all route definitions (catch-all `**` → `PageNotFoundComponent` must stay last)
- [src/app/services/userservice.service.ts](src/app/services/userservice.service.ts) — demo data + HTTP calls to `https://dummyjson.com/products` and a local json-server at `localhost:3000/users`
- [src/app/pipes/currency-convertor.pipe.ts](src/app/pipes/currency-convertor.pipe.ts) — custom pipe example
- [src/app/interfaces/](src/app/interfaces/) — `IEmployee`, `User`, `TodoItem`
- [src/app/types/TodoFilter.ts](src/app/types/TodoFilter.ts) — `'all' | 'active' | 'completed'`

### Styling

- Per-component SCSS files
- Global theme in [src/styles.scss](src/styles.scss)
- Bootstrap 5.3.8 and Font Awesome 7.2.0 included via `angular.json` styles array (not imported in SCSS)

## Adding a New Feature Module

1. Generate: `ng generate component layout/main-content/<feature-name>`
2. Add a route in [src/app/app.routes.ts](src/app/app.routes.ts) — keep the `**` catch-all last
3. Add a `RouterLink` entry in [src/app/layout/side-nav-bar/](src/app/layout/side-nav-bar/)

## TypeScript

Strict mode is enabled (`strict: true`, `strictTemplates`, `noImplicitOverride`). All new components should be standalone (`standalone: true` is the default in Angular 19).
