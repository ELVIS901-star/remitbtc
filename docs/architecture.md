# Architecture

Remitbtc is a cross-platform mobile application for Lightning remittances.

## High-Level Components
- React Native UI: screens, components, and navigation
- State management: (to be determined)
- Firebase backend: Auth, Firestore/RTDB, Cloud Functions
- Breez SDK: Lightning node functions (invoices, payments, channels)

## Data Flow
- User actions trigger UI events
- Services handle side-effects (network, Breez SDK)
- Firebase persists state; updates propagate to UI

## Security & Keys
- Store sensitive keys using native secure storage
- Principle of least privilege for Firebase rules

## Platform Considerations
- iOS/Android native setup for Breez SDK
- Offline and background handling for payments
