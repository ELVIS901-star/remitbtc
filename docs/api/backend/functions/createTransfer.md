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
