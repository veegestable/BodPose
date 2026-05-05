# Running BodPose (Windows + Android)

Because this project uses native modules (`react-native-mmkv`, `@nozbe/watermelondb`), use a **development build** instead of plain Expo Go.

## One-time setup

1. Install dependencies:
   - `npm install`
2. Generate native project files:
   - `npm run prebuild`

## Build and run on Android

1. Connect/start an Android device or emulator.
2. Build and install the dev client:
   - `npm run android`
3. Start Metro for dev client:
   - `npm run start:dev`

## Regular daily run flow

After the first successful Android build:

1. `npm run start:dev`
2. Open the installed BodPose dev client on your device/emulator.

## Troubleshooting

- If you see "Project is incompatible with this version of Expo Go":
  - This is expected for this project setup. Use dev client commands above.
- If native modules fail after dependency changes:
  - Run `npm run prebuild` again, then `npm run android`.
