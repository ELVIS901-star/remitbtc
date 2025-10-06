# Component: Button

## Purpose
Primary action button with loading and disabled states.

## Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | yes | — | Text to display |
| `onPress` | `() => void` | yes | — | Press handler |
| `isLoading` | `boolean` | no | `false` | Shows spinner and disables |
| `variant` | `'primary' | 'secondary'` | no | 'primary' | Visual style |
| `disabled` | `boolean` | no | `false` | Disables interaction |

## Usage
```tsx
<Button title="Send" onPress={handleSend} isLoading={saving} />
```

## Variants
- `primary`: Emphasized action, default
- `secondary`: Subtle action, lower emphasis

## Accessibility
- Ensure `title` is descriptive; screen readers announce it as the accessible name
- When `isLoading` is true, the component should set `accessibilityState={{ busy: true }}` and prevent duplicate submissions

## Testing
- Use `testID="button-send"` to target the element in E2E tests
