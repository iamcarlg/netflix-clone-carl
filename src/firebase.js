import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB96DRFf8LxRojIaWgcXr6hWM4FdAlOaBc",
  authDomain: "netflix-clone-carl.firebaseapp.com",
  projectId: "netflix-clone-carl",
  storageBucket: "netflix-clone-carl.appspot.com",
  messagingSenderId: "1043612140561",
  appId: "1:1043612140561:web:fa42467ec955da6a6f5db0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth};
export default db;

