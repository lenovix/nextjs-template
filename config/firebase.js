import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDChBQsrIDrq-PlrcT5JDO7aaNrM1UUVKo',
  authDomain: 'nextjsproject-2a1e2.firebaseapp.com',
  projectId: 'nextjsproject-2a1e2',
  storageBucket: 'nextjsproject-2a1e2.appspot.com',
  messagingSenderId: '726998284571',
  appId: '1:726998284571:web:b11ae8b84820ff7727bbbe',
  measurementId: 'G-7WG7HM5V16',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };
