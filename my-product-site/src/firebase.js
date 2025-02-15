import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZqJSBLKZvROhfFG8mQMon-beS7TL5qFQ",
  authDomain: "react-fd9cf.firebaseapp.com",
  projectId: "react-fd9cf",
  storageBucket: "react-fd9cf.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
