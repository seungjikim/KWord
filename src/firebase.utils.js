import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
export default firestore;
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider(); //구글 팝업을 띄우자.
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); //auth를 할건데 위에 정의한 provider로 할거야.

//export default firebase;