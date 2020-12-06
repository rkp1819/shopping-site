import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnhvk4CdNGa-XxKJx4-_6mSjyAMz3hxGM",
  authDomain: "shopping-site-3f316.firebaseapp.com",
  projectId: "shopping-site-3f316",
  storageBucket: "shopping-site-3f316.appspot.com",
  messagingSenderId: "731015808566",
  appId: "1:731015808566:web:f5f41ad3e9e857ebe93a97",
  measurementId: "G-8KLXS8KFET",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();
// const twitterProvider = new firebase.auth.TwitterAuthProvider();

export { db, storage, auth, googleProvider };
