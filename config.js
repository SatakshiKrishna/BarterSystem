import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBgB395m4KUxzY3obyav9zbSqXruMIYnqg",
  authDomain: "bartersystem-6dcda.firebaseapp.com",
  projectId: "bartersystem-6dcda",
  storageBucket: "bartersystem-6dcda.appspot.com",
  messagingSenderId: "334153357366",
  appId: "1:334153357366:web:b33ba9c708a76d0ad3a097"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
