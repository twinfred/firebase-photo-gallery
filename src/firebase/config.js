import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCphhLEEuq4qcB_MlEwunB-sYHAkr-ykLg",
  authDomain: "fir-photo-gallery-e6b8a.firebaseapp.com",
  projectId: "fir-photo-gallery-e6b8a",
  storageBucket: "fir-photo-gallery-e6b8a.appspot.com",
  messagingSenderId: "986316925924",
  appId: "1:986316925924:web:ecc1d1db73c2e6a358f5f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {
  projectStorage,
  projectFirestore
};