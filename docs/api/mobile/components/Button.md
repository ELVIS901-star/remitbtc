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

## Usage
```tsx
<Button title="Send" onPress={handleSend} isLoading={saving} />
```
