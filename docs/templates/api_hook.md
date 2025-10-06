# Hook: use<Thing>

## Purpose
Brief description of the hook and responsibility boundaries.

## Signature
```ts
function use<Thing>(args: UseThingOptions): UseThingResult
```

### Parameters
- `options`: Object with configuration

### Returns
- Data and actions the hook provides

## Usage
```tsx
import { use<Thing> } from '<package-or-path>';

export function Example() {
  const { data, error, isLoading, doAction } = use<Thing>({ /* options */ });

  // ... use in component
}
```

## Notes
- Side-effects and dependencies
- Caching/state
