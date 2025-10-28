# RemitBTC - Overview

RemitBTC is a cross-platform mobile app built with React Native, Firebase, and Breez SDK to enable fast, affordable Bitcoin Lightning remittances.

## Architecture

- Mobile: React Native app leveraging Breez SDK for Lightning operations
- Backend: Firebase (Auth, Firestore, Cloud Functions), optional server services
- Payments: Lightning Network via Breez SDK
- Data: Firestore for user profiles, remittance records, rates cache

## Modules

- Mobile components: Reusable UI components used across screens
- Hooks: Reusable logic (data fetching, wallet state, auth)
- Utilities: Formatting, validation, Lightning helpers
- Backend functions: Cloud Functions for secure operations (e.g., rate fetch, KYC checks)
- Services: Abstractions for providers (Breez, FX rates, SMS)

## Data Flows

1. User authenticates via Firebase Auth
2. User creates a transfer: amount, destination, currency
3. App fetches FX and LN fees, shows quote
4. User confirms; app initiates Lightning payment via Breez SDK
5. Backend validates, records transaction in Firestore, and emits notifications

## Environments

- Development: Emulator + Breez test environment
- Staging: Pre-release with test accounts
- Production: Live Breez and Firebase projects
