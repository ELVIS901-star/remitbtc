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

## Caching & TTL
- Cache rates in Firestore or memory with a short TTL (e.g., 60 seconds)
- On cache miss or expiry, fetch from primary provider and update the cache

## Data Sources
- Primary: Trusted FX API for BTC/fiat
- Fallback: Secondary provider if primary fails or rate is stale

## Errors
- `ProviderError` — Upstream provider failure
- `StaleRateError` — Cached rate too old and providers unavailable
- `ValidationError` — Unsupported currency code

## Example Implementation Sketch
```ts
export async function getCurrentRate(fiatCurrency: string): Promise<number> {
  const cached = await cache.get(fiatCurrency);
  if (cached && !isExpired(cached)) return cached.value;
  const fresh = await provider.fetchRate(fiatCurrency);
  await cache.set(fiatCurrency, fresh, { ttlSeconds: 60 });
  return fresh;
}
```
