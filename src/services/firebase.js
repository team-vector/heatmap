import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCYapub-g87p2hXvJDOYh5_ARUUvcrRtU8",
  authDomain: "wtfixathon.firebaseapp.com",
  databaseURL: "https://wtfixathon.firebaseio.com",
  projectId: "wtfixathon",
  storageBucket: "wtfixathon.appspot.com",
  messagingSenderId: "498260632862"
});

export const app = firebase;
export const firestore = app.firestore();
export const procedureCollection = firestore.collection('procedures');
export const hospitalCollection = firestore.collection('hospitals');
export const resultsCollection = firestore.collection('results');
