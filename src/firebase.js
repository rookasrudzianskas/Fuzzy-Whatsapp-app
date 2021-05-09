import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzN2L1bec99N8SoltPbkUYk8wsSK5XxFM",
    authDomain: "whatsapp-clone-c6b92.firebaseapp.com",
    projectId: "whatsapp-clone-c6b92",
    storageBucket: "whatsapp-clone-c6b92.appspot.com",
    messagingSenderId: "510070055555",
    appId: "1:510070055555:web:6c3c253bc4bc192c2e31b6",
    measurementId: "G-BCM7F6GSLP"
};

// we are initializing the connection betweek the app and the firebase with this line
const firebaseApp = firebase.initializeApp(firebaseConfig)
// here we create db variable to get out database in our app
const db = firebaseApp.firestore();
const auth = firebase.auth();
// this is authentication provider
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;