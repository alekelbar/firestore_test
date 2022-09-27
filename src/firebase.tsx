import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeb28rH9jjT2Vb0KT9de_UGCFTta2buNU",
  authDomain: "fir-test-bede7.firebaseapp.com",
  projectId: "fir-test-bede7",
  storageBucket: "fir-test-bede7.appspot.com",
  messagingSenderId: "178579992038",
  appId: "1:178579992038:web:d981ad19f5dff5984dfa27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);