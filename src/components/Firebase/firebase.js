// import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCmROTdKoTB9ifNo8h4xC7_uZ_yEHv2eOA",
    authDomain: "dummy-chat-app-36cf0.firebaseapp.com",
    databaseURL: "https://dummy-chat-app-36cf0.firebaseio.com",
    projectId: "dummy-chat-app-36cf0",
    storageBucket: "dummy-chat-app-36cf0.appspot.com",
    messagingSenderId: "998048126038",
    appId: "1:998048126038:web:3120e66c51621d6c44d7f7",
    measurementId: "G-NBQCVRRBPL"
};
// Initialize Firebase
// export const Firebase = firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

}
export default Firebase;

// export const db = Firebase.firestore();


