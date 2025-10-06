# Breez SDK Integration

## Overview
Breez SDK provides Lightning capabilities for mobile.

## Installation
- Add Breez SDK dependency per platform

## Usage
```ts
import { BreezSdk } from '@breeztech/react-native-breez-sdk';

await BreezSdk.init({
  apiKey: process.env.BREEZ_API_KEY!,
});
```

## Notes
- Use test environment for development
- Handle channel liquidity
