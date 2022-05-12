import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD8MVxypGT6SM6Ai4lNkS9YSDcxpj6l8fo",
    authDomain: "my-project1-f0cc6.firebaseapp.com",
    projectId: "my-project1-f0cc6",
    storageBucket: "my-project1-f0cc6.appspot.com",
    messagingSenderId: "742930855230",
    appId: "1:742930855230:web:d6afdc74ca0fa18727686f"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }