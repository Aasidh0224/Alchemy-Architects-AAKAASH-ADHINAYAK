Mobile build notes

- The GitHub workflow creates a debug-signed Android APK for prototype testing.
- Before a store release, configure the app owner's identity provider, server-side permissions, scoped tokens, logs/retention policies and privacy disclosures.
- Validate screen readers, contrast, low-memory behaviour, supported Android versions and physical devices.
- Remote notifications need an EAS project ID and a backend sender; local notifications are separate.
- Configure an authorised HTTPS sync endpoint and test duplicate/retry/conflict behaviours.
- An iOS IPA requires the owner's Apple signing identity, provisioning profile and a macOS/EAS build.
- The packaged demo uses synthetic examples and is not connected to operational services.
