# Usage Examples

## Send a Lightning Payment
```tsx
import { Button } from 'app/components/Button';
import { useLightningPayment } from 'app/hooks/useLightningPayment';

export function SendPaymentScreen() {
  const { isSending, error, sendPayment } = useLightningPayment();

  return (
    <Button
      title={isSending ? 'Sending…' : 'Send'}
      isLoading={isSending}
      onPress={() => sendPayment(invoice, amountSats)}
    />
  );
}
```

## Create Transfer (Backend)
```ts
import { createTransfer } from 'functions/createTransfer';

const { transferId } = await createTransfer({
  fromUserId: user.id,
  toAddress,
  amountFiat: 100,
  fiatCurrency: 'USD',
});
```
