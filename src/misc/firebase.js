import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDJZtfMJ97aFxbcs9TR-cP3LifAkuGJkd8',
  authDomain: 'chat-web-app-36298.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-36298-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-36298',
  storageBucket: 'chat-web-app-36298.appspot.com',
  messagingSenderId: '176117343307',
  appId: '1:176117343307:web:80a6798f5607b01921d9ce',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
