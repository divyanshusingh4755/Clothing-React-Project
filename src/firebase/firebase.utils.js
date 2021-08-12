import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCt-Ngb010iOZs75d2IALvvEiYxiM4VUQ",
    authDomain: "wikiehelp-clothing.firebaseapp.com",
    projectId: "wikiehelp-clothing",
    storageBucket: "wikiehelp-clothing.appspot.com",
    messagingSenderId: "91143341022",
    appId: "1:91143341022:web:9a4b45fc654c39b3bc934f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;