import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3PfbhKjkAiAbpHY5dwGQE3NZaq9naRd4",
  authDomain: "shopping-site-101.firebaseapp.com",
  projectId: "shopping-site-101",
  storageBucket: "shopping-site-101.appspot.com",
  messagingSenderId: "87953409019",
  appId: "1:87953409019:web:e447000748bfc43b98015e",
  measurementId: "G-VW60J24GL3",
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
