
# SleepApp

SleepApp is a cross-platform mobile and web application designed to help users improve their sleep quality by providing calming music, stories, and meditation exercises. 
## Project Structure
SleepApp/
├── android/
├── ios/
├── app/
│   ├── components/
│   │   ├── LoginScreen.js
│   │   ├── MainScreen.js
│   │   ├── PaymentScreen.js
│   ├── config/
│   │   ├── firebaseConfig.js
│   │   ├── GoogleSignInConfig.js
│   │   ├── AppleSignInConfig.js
│   │   ├── StripeConfig.js
│   ├── App.js
├── .env
├── package.json
├── README.md
sleep-app-web/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginScreen.js
│   │   ├── MainScreen.js
│   │   ├── PaymentScreen.js
│   ├── config/
│   │   ├── firebaseConfig.js
│   │   ├── GoogleSignInConfig.js
│   │   ├── AppleSignInConfig.js
│   │   ├── StripeConfig.js
│   ├── App.js
├── .env
├── package.json
├── README.md

README.md

## Features

- **Calming Music**: Play soothing music to help users relax and sleep better.
- **Stories**: Listen to bedtime stories designed to calm the mind.
- **Meditation**: Guided meditation sessions to promote relaxation and better sleep.

## Project Structure

### Mobile App (React Native)


SleepApp/ ├── android/ ├── ios/ ├── app/ │ ├── components/ │ │ ├── LoginScreen.js │ │ ├── MainScreen.js │ │ ├── PaymentScreen.js │ ├── config/ │ │ ├── firebaseConfig.js │ │ ├── GoogleSignInConfig.js │ │ ├── AppleSignInConfig.js │ │ ├── StripeConfig.js │ ├── App.js ├── .env ├── package.json ├── README.md


### Web App (React)


sleep-app-web/ ├── public/ ├── src/ │ ├── components/ │ │ ├── LoginScreen.js │ │ ├── MainScreen.js │ │ ├── PaymentScreen.js │ ├── config/ │ │ ├── firebaseConfig.js │ │ ├── GoogleSignInConfig.js │ │ ├── AppleSignInConfig.js │ │ ├── StripeConfig.js │ ├── App.js ├── .env ├── package.json ├── README.md


## Setup

### Prerequisites

- Node.js
- npm or yarn
- Firebase project
- Stripe account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/SleepApp.git
   cd SleepApp

Install dependencies:
npm install

Set up environment variables: Create a .env file in the root directory with the following content:
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
FIREBASE_APP_ID=your-firebase-app-id
GOOGLE_WEB_CLIENT_ID=your-google-web-client-id
STRIPE_PUBLIC_KEY=your-stripe-public-key

Running the Mobile App
Start the development server:
npx react-native run-android
# or
npx react-native run-ios

Running the Web App
Navigate to the web app directory:
cd sleep-app-web

Install dependencies:
npm install

Start the development server:
npm start

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License.
