import firebase, { auth } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlmIN3RU_j61sgacs_1_sYaQ7THnaJjOY",
    authDomain: "kword-7a373.firebaseapp.com",
    databaseURL: "https://kword-7a373.firebaseio.com",
    projectId: "kword-7a373",
    storageBucket: "kword-7a373.appspot.com",
    messagingSenderId: "793143708524",
    appId: "1:793143708524:web:d2f5eff6935b51d9b98149",
    measurementId: "G-E3S4KY1BVX"
  };

firebase.initializeApp(firebaseConfig);

const firestore = new firebase.firestore();

export { firestore };