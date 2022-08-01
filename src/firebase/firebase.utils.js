import { initializeApp } from "firebase/app";
import {
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect
} from "firebase/auth"

import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAf4hJwR1HWG2qSGAZ4GCwHdssQWHsCWwQ",
  authDomain: "capstone-pro-db.firebaseapp.com",
  projectId: "capstone-pro-db",
  storageBucket: "capstone-pro-db.appspot.com",
  messagingSenderId: "347798038544",
  appId: "1:347798038544:web:4bdf34e1f8d5109dfe4295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// create a provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithPrompt = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
    const docRef = doc(db, 'users', userAuth.uid);
    const userDocSnapshot = await getDoc(docRef);
    const userExists = userDocSnapshot.exists();
    // if user doesn't exist
    if(!userExists){
        // create a user doc in db
        const {email, displayName} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(docRef, { email, displayName, createdAt })
        } catch (error) {
            console.log("error login ", error.message)
        }
    }
    // if user exist OR created return docRef of the user
    return docRef;
}


