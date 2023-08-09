import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAfZ94YzCds4ZOU7Wy8Px2bkbEbkod5pqo',
  authDomain: 'music-app-1910b.firebaseapp.com',
  projectId: 'music-app-1910b',
  storageBucket: 'music-app-1910b.appspot.com',
  appId: '1:832627016238:web:b2ff3f65d0965eca6795bf'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');

export { auth, db, usersCollection, storage };
