
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "@firebase/auth";
import { FacebookAuthProvider } from "@firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyARxginoz7-YFubWJYEP2ds1QrIpTqR4mk",
  authDomain: "entregafinal-7ffa1.firebaseapp.com",
  projectId: "entregafinal-7ffa1",
  storageBucket: "entregafinal-7ffa1.appspot.com",
  messagingSenderId: "788803647961",
  appId: "1:788803647961:web:b4643c6a79bfcbf1dcc1c8"
};

const app = initializeApp(firebaseConfig);
const google= new GoogleAuthProvider();
const facebook= new FacebookAuthProvider();
const db= new getFirestore()

export{
    app,
    google,
    facebook,
    db
}