# Example: Send a Lightning Payment

This is a conceptual example until source code is added.

```ts
import { sendPayment } from "@/modules/payments";

async function run() {
  const result = await sendPayment({
    invoice: "lnbc1...",
    amountSats: 1000,
    comment: "Remittance",
  });
  console.log(result.status);
}
```

## Expected Behavior
- Validates invoice and amount
- Calls Breez SDK to perform payment
- Persists transaction to Firebase
