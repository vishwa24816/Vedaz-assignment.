# AwesomeProject

This is a React Native project that mimics the WhatsApp call screen and notification behavior.

## How to run the project

### Prerequisites

- Node.js
- npm
- React Native CLI
- Android Studio
- Xcode

### Steps

1.  Clone the repository.
2.  Navigate to the `AwesomeProject` directory.
3.  Run `npm install` to install the dependencies.
4.  Run `react-native run-android` to run the app on Android.
5.  Run `react-native run-ios` to run the app on iOS.

### Backend Server

1.  Navigate to the `AwesomeProject/server` directory.
2.  Run `npm install` to install the dependencies.
3.  Create a `serviceAccountKey.json` file in the `server` directory with your Firebase service account credentials.
4.  Run `npm start` to start the server.

### Sending Notifications

To send a notification, make a POST request to `http://localhost:3000/send-notification` with the following body:

```json
{
  "token": "your-device-token"
}
```
