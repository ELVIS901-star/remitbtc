# API Reference

This section documents public APIs exposed by the remitbtc app. Since the repository currently does not include source files, this reference provides a template and guidelines for documenting modules once code is added.

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

