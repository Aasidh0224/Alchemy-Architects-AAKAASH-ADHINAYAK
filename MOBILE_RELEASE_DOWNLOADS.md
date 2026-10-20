# AAKAASH ADHINAYAK — mobile release downloads

The GitHub Actions **Android APK** workflow builds a debug-signed APK and tests the source. When it completes successfully on `main`, the **Publish Android release assets** workflow packages the APK and both source bundles into a prerelease.

## Download
Go to the repository's [Releases page](https://github.com/Aasidh0224/Alchemy-Architects-AAKAASH-ADHINAYAK/releases). Open the newest **AAKAASH ADHINAYAK Android Test Build** and download `AAKAASH-ADHINAYAK.apk`.

The same release provides:
- `AAKAASH_ADHINAYAK_NATIVE_MOBILE_SOURCE.zip`
- `AAKAASH_ADHINAYAK_APK_BUILD_KIT.zip`
- `SHA256SUMS.txt`

Because the repository is private, users must have repository access to download release assets.

## Install the APK
Transfer the APK to an Android device, open it from Downloads, allow installation for that source when Android prompts, and tap Install. This debug-signed build is for prototype sideload testing only.

## Verify a download
On a machine with `sha256sum`, compare the APK to the APK line in `SHA256SUMS.txt`:
```bash
sha256sum AAKAASH-ADHINAYAK.apk
```

## Release boundaries
This is a non-operational student prototype using generic synthetic records. It is not a one-to-one clone of every web feature and is not a production-signed Play Store release. Physical-device, security, accessibility, battery and offline tests remain necessary before broader distribution.
