import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBUiesMtDtMlQHhccwUGlgeairbPs347D0",
  authDomain: "crup-application.firebaseapp.com",
  projectId: "crup-application",
  storageBucket: "crup-application.appspot.com",
  messagingSenderId: "126976341945",
  appId: "1:126976341945:web:981053d798c25a39b9e868",
  measurementId: "G-PM4K1QY4J2",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
