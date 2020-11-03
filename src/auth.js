import firebase from "firebase";
import "firebase/auth"
firebase.initializeApp({
    apiKey: process.env.REACT_APP,
    authDomain: "store-your-homework.firebaseapp.com",
    databaseURL: "https://store-your-homework.firebaseio.com",
    projectId: "store-your-homework",
    storageBucket: "store-your-homework.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});
class Auth {
    constructor() {
        this.auth = false;
        this.data = {}
    }
    
    async login(cb) {
        const provider = await new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
        this.auth = true;
        cb()
    }
    logout() {
        firebase.auth().signOut()
        this.auth = false;
    }
    getAuthStatus() {
        return this.auth
    }
    async onAuthStateChanged() {
        let userData = {}
        await firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let displayName = user.displayName;
                let email = user.email;
                let uid = user.uid;
                let data = {
                    displayName,
                    email,
                    uid
                }
                userData = data;
            }
        })
        return userData
    }
}

export default new Auth()