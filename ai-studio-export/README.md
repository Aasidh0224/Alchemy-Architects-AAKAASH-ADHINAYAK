# Google AI Studio export materials (sanitised)

This folder preserves the supporting configuration files supplied from the Google AI Studio download for **AAKAASH ADHINAYAK**.

## Safety and integrity notes
The uploaded server implementation contained operational military/weapon-related endpoints, hard-coded operational figures, and fallback responses that were not independently verified. For safe repository maintenance, `server.ts` here is an adapted generic scaffold, not a byte-for-byte copy of the uploaded server. It supports a health endpoint, a small allowlist of public civil-weather stations, and an optional Gemini endpoint limited to generic synthetic scheduling explanations.

The uploaded Firestore rules allowed overly broad collection access. The rules in this folder are a restrictive example. Test rules in a staging Firebase project before use.

The real Firebase client configuration is represented by `firebase-applet-config.example.json` with placeholders. The provided configuration's actual API key and project identifiers were not copied into Git. Configure appropriately restricted Firebase keys and keep Gemini credentials server-side. Never commit a real `.env` file.

## Files
- `package.json`, `bun.lock`, `tsconfig.json`, `vite.config.ts`, `index.html`: build configuration from the export, retained for reference.
- `.env.example`: placeholders only.
- `metadata.json`: app metadata.
- `firestore.rules`: owner-scoped generic collections and default deny.
- `server.ts`: adapted safe generic API scaffold.
- `firebase-applet-config.example.json`: redacted configuration template.

## Run notes
This directory is a sanitised configuration snapshot, not a stand-alone app bundle. The current curated demo is in the repository root; follow the root README for its run/test instructions. The original full frontend component tree is not duplicated in this folder.

No endpoint in this folder should be interpreted as military operational support.
