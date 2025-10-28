# API Reference

This section documents public APIs exposed by the remitbtc app. Since the repository currently does not include source files, this reference provides a template and guidelines for documenting modules once code is added.

## Index

- Mobile
  - Components
    - [Button](./mobile/components/Button.md)
  - Hooks
    - [useLightningPayment](./mobile/hooks/useLightningPayment.md)
  - Utils
    - (coming soon)
- Backend
  - Functions
    - [createTransfer](./backend/functions/createTransfer.md)
  - Services
    - [RatesService](./backend/services/ratesService.md)

## How to Document a Module
1. Overview: purpose and key responsibilities
2. Public API surface: exported functions, classes, and types
3. Props/parameters, return values, and events
4. Examples: minimal and advanced usage
5. Notes: platform considerations (iOS/Android), performance, and errors

## Templates
- Component: `api/templates/component.md`
- Module/Service: `api/templates/module.md`

## Generating Docs
When source files are available, consider using:
- TypeScript projects: `typedoc` with `tsconfig.json`
- React components: `react-docgen-typescript` or Storybook autodocs
- Kotlin/Swift native modules: Dokka / Jazzy with bridged TypeScript types

### Suggested generation commands (when code exists)
- TypeDoc quickstart:
  - Install: `yarn add -D typedoc typedoc-plugin-markdown`
  - Run: `npx typedoc --plugin typedoc-plugin-markdown --out docs/api/autogen src`
- React component props with `react-docgen-typescript`:
  - Install: `yarn add -D react-docgen-typescript`
  - Integrate with your build tooling or run standalone against component files

### Authoring conventions
- Prefer TypeScript for signatures and examples
- Include error cases and platform notes
- Document side-effects and data persistence (e.g., Firestore writes)

