import firebase from "firebase";
import "firebase/auth"
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
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
    
    async loginWithGoogle(cb) {
        const provider = await new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
        this.auth = true;
        cb()
    }
    async loginWithGithub(cb) {
        const provider = await new firebase.auth.GithubAuthProvider();
        await firebase.auth().signInWithPopup(provider).catch(err => {
            console.log(err.message)
            err ? this.auth = false : this.auth = true
        })
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
                let pf = user.photoURL;
                let data = {
                    displayName,
                    email,
                    uid,
                    pf
                }
                userData = data;
            }
        })
        return userData
    }
}

export default new Auth()