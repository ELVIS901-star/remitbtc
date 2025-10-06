# Configuration

Environment and third-party services used by remitbtc.

## Environment Variables
Create `.env` in project root.

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `BREEZ_API_KEY`
- `BREEZ_ENV` (e.g., `production`, `staging`)

## Firebase
- Enable Email/Password and/or OAuth providers
- Set Firestore security rules with least privilege

## Breez SDK
- Follow platform-specific installation guides
- Configure node policies (fees, channels) per product needs
