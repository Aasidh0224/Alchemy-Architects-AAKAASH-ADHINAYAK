AAKAASH ADHINAYAK Mobile

Alchemy Architects · SIH 2026 · SIH26250

React Native / Expo companion for a generic resource-planning student prototype. This project uses synthetic examples and does not connect to external services by default.

Features
- React Native with Expo SDK 58 and native stack navigation.
- Offline SQLite storage for generic resource/task records, planning runs and event history.
- Deterministic scheduling heuristic and independent validator.
- Synthetic disruption/replanning scenarios and local audit events.
- Device biometrics with device-credential fallback.
- A development-only demo shortcut (0224), not available in release builds.
- SecureStore-backed optional sync endpoint/token configuration.
- Local notifications and push-token setup scaffold.
- PDF export/share, battery indicator, night palette, high-contrast controls and screen-reader labels.
- CI workflow designed to build a debug APK for test installation.

Build locally with Node.js 22.13+:

    npm install
    npx expo install --fix
    npm test
    npx expo start

Android native build needs Android Studio and the Android SDK:

    npx expo prebuild --platform android
    npx expo run:android

APK build workflow
Open GitHub Actions, select Android APK, open the latest successful run, and download the AAKAASH-ADHINAYAK-debug-APK artifact. The artifact is a debug-signed prototype for sideload testing, not a store release.

iOS
This source includes iOS configuration but does not contain a signed IPA. An iOS build needs an Apple signing identity, provisioning profile and macOS/EAS build.

Offline and sync
Local planning/history uses SQLite. Sync is disabled by default. Configure an HTTPS service you control and a scoped token in Settings. Push delivery requires a project ID and a backend sender. No external data feed or cloud server is configured by default.

Do not store sensitive or restricted information in this prototype.
