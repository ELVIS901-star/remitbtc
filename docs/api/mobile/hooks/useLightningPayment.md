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
