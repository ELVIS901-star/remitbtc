# Hook: useLightningPayment

## Purpose
Handles lifecycle of sending a Lightning payment via Breez SDK.

## Signature
```ts
function useLightningPayment(): {
  isSending: boolean;
  error: Error | null;
  sendPayment: (invoice: string, sats: number) => Promise<string>; // returns paymentId
}
```

## Usage
```tsx
const { isSending, error, sendPayment } = useLightningPayment();

async function onPay() {
  const id = await sendPayment(invoice, amountSats);
}
```

## Notes
- Validates invoice format
- Surfaces Breez SDK errors with actionable messages

## Parameters
- `sendPayment(invoice: string, sats: number)`
  - `invoice`: BOLT11 invoice string
  - `sats`: Amount in satoshis. If the invoice is amount-locked, this must match

## Returns
- `Promise<string>` — A unique `paymentId` for tracking state in UI and analytics

## Errors
- `InvalidInvoiceError` — The invoice is malformed or expired
- `InsufficientBalanceError` — Local wallet has insufficient funds or inbound liquidity
- `NetworkError` — Connectivity issues with the Lightning node or peers
- `ProviderError` — Breez SDK returned an error; inspect `error.code`

## Advanced Example
```tsx
const { isSending, error, sendPayment } = useLightningPayment();

async function handleConfirmPay() {
  try {
    const paymentId = await sendPayment(invoice, amountSats);
    // Navigate to receipt screen with paymentId
  } catch (err) {
    // Show toast or inline error; map err to user-friendly message
  }
}
```
