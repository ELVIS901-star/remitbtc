# Getting Started

This project is a React Native app powered by Firebase and Breez SDK. This doc outlines how to set up your environment after code is present in the repository.

## Prerequisites
- Node.js LTS and Yarn or npm
- Xcode (iOS) and Android Studio (Android)
- Java 17 (Android builds), CocoaPods (iOS)

## Setup
1. Clone the repo and install dependencies
```bash
yarn install
```
2. Configure environment variables
Create `.env` with Firebase config, Breez API keys, etc.
3. Platform setup
- iOS: `cd ios && pod install`
- Android: ensure SDKs installed and emulators configured

## Run
```bash
yarn ios
# or
yarn android
```

## Build
```bash
yarn build
```
