# Function: createTransfer

## Purpose
Creates a transfer record and initiates payment processing.

## Signature
```ts
async function createTransfer(input: {
  fromUserId: string;
  toAddress: string;
  amountFiat: number;
  fiatCurrency: string;
}): Promise<{ transferId: string }>
```

## Behavior
- Validates user and KYC status
- Persists transfer document in Firestore
- Enqueues background processing

## Example
```ts
const { transferId } = await createTransfer({
  fromUserId: user.id,
  toAddress,
  amountFiat: 100,
  fiatCurrency: 'USD',
});
```

## Authentication & Authorization
- Requires an authenticated session; `fromUserId` must match the caller's UID
- Enforces KYC/AML status and transfer limits per user tier

## Input Validation
- `toAddress`: Destination identifier must meet format rules (bank, LN address, etc.)
- `amountFiat`: Positive number within configured min/max bounds
- `fiatCurrency`: ISO 4217, uppercased (e.g., `USD`, `EUR`)

## Errors
- `UnauthorizedError` — Caller not authenticated or mismatched `fromUserId`
- `KycRequiredError` — KYC is missing, expired, or insufficient for requested amount
- `ValidationError` — Invalid `toAddress`, `amountFiat`, or `fiatCurrency`
- `RateUnavailableError` — FX rate source is unavailable; request should be retried
- `ConflictError` — Duplicate request detected (idempotency key matches prior)

## Idempotency
Use an idempotency key (e.g., hash of `{fromUserId,toAddress,amountFiat,fiatCurrency}`) to avoid duplicate transfers when clients retry.

## Invocation
This function is typically exposed as a Firebase Callable Function. An HTTPS endpoint may be provided for non-mobile clients.

### Callable (Client SDK)
```ts
import { httpsCallable } from 'firebase/functions';

const createTransferCallable = httpsCallable(functions, 'createTransfer');
const { data } = await createTransferCallable({ fromUserId, toAddress, amountFiat, fiatCurrency });
console.log(data.transferId);
```

### HTTP (If enabled)
```bash
curl -X POST \
  -H "Authorization: Bearer <ID_TOKEN>" \
  -H "Content-Type: application/json" \
  https://<region>-<project>.cloudfunctions.net/createTransfer \
  -d '{
    "fromUserId": "uid123",
    "toAddress": "addr...",
    "amountFiat": 100,
    "fiatCurrency": "USD"
  }'
```
