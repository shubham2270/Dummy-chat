import app from 'firebase/app';
import firestore from 'firebase'
import 'firebase/auth';
import 'firebase/database'
import '@firebase/firestore';

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
// export const Init = firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore()

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

    doAddChat = () => this.db.firestore()


}
export default Firebase;

// export const db = Init.firestore();


