# AAKAASH ADHINAYAK — Mobile Installation Guide

## What this provides
This package turns the curated, non-operational resource-planning demo into an installable Progressive Web App (PWA). It adds a home-screen icon, standalone launch mode, safe-area-aware mobile layout, bottom navigation, install instructions, launcher icons and a conservative service-worker cache for the app shell.

## Deploy first
PWA installation requires HTTPS (localhost is the normal development exception). The Google AI Studio URL is a separate deployment; changes in this GitHub repository do not modify that hosted application by themselves. Deploy the repository build to an HTTPS host, then install its deployed URL.

## Android
Open the HTTPS deployment in Chrome and tap **Install app** in the header. If the browser does not show a custom prompt, use Chrome's menu and choose **Install app** or **Add to Home screen**.

## iPhone / iPad
Open the HTTPS deployment in Safari. Tap **Share** → **Add to Home Screen** → **Add**.

## Offline and security
- The app shell and static same-origin assets are cached.
- `/api/` requests are not cached, so stale server responses are not shown as current.
- Local planning state remains in memory unless explicitly exported.
- This version uses generic synthetic records and is not an operational command system.

## Validate
```bash
npm install
npm test
npm run build
npm run preview
```
Then open the HTTPS deployment on a phone and test installation, launch, navigation, tables, import/export, and offline shell behaviour.

## Native APK distinction
A PWA is installable without an app store but is not itself an Android APK. A signed APK/AAB requires a separate native Android/Capacitor build, Android SDK signing, and device testing.
