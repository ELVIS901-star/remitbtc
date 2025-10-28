# Example: Request a Lightning Payment

This is a conceptual example until source code is added.

```ts
import { createInvoice } from "@/modules/invoices";

async function run() {
  const { invoice } = await createInvoice({
    amountSats: 2500,
    memo: "Top-up",
  });
  console.log(invoice);
}
```

## Expected Behavior
- Creates invoice via Breez SDK
- Persists request to Firebase
- Exposes QR for payer
