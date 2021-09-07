import firebase from "firebase";

// Firebase config
const firebaseApp = firebase.initializeApp({
    
    //code
      
});

const db = firebaseApp.firestore();

export default db; 