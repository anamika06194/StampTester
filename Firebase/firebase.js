//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcU3xQkyFRJpAfxkUmBxGIEXbS9MnbZSM",
  authDomain: "sign-in-e69b7.firebaseapp.com",
  projectId: "sign-in-e69b7",
  storageBucket: "sign-in-e69b7.appspot.com",
  messagingSenderId: "601646590789",
  appId: "1:601646590789:web:b3e917049576bd6e0eac2c",
  measurementId: "G-TC607SZ6H3"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
