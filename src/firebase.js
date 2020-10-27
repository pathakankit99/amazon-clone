// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOrMlxso4phbNJ36efk406f7mSsOAxHII",
    authDomain: "ak99amaz.firebaseapp.com",
    databaseURL: "https://ak99amaz.firebaseio.com",
    projectId: "ak99amaz",
    storageBucket: "ak99amaz.appspot.com",
    messagingSenderId: "750162517714",
    appId: "1:750162517714:web:32b70a86f77eb3a750170b",
    measurementId: "G-439DX9E9Q1"
  });
  

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export  {db, auth}
