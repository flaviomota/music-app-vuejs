import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAfZ94YzCds4ZOU7Wy8Px2bkbEbkod5pqo',
  authDomain: 'music-app-1910b.firebaseapp.com',
  projectId: 'music-app-1910b',
  storageBucket: 'music-app-1910b.appspot.com',
  appId: '1:832627016238:web:b2ff3f65d0965eca6795bf'
};

export default firebase.initializeApp(firebaseConfig);
