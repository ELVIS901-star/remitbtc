# Service: RatesService

## Responsibility
Fetch and cache FX rates for fiat-to-sats conversion.

## Interface
```ts
export interface RatesService {
  getCurrentRate(fiatCurrency: string): Promise<number>; // sats per fiat unit
}
```

## Usage
```ts
const satsPerUsd = await ratesService.getCurrentRate('USD');
```
