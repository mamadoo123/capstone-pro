import { initializeApp } from "firebase/app";
import {
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"

import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
    collection, // to get a collection ref (just like doc => docRef)
    writeBatch, // to set a doc into db
    query,
    getDocs,
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
const db = getFirestore()

// Now we gonna create a method to upload the shop data into firesoter db
const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => { // collectinKey: like users, categories and so ..
    const collectionRef = collection(db, collectionKey) // firebase creates one if it doesn't exist
    const batch = writeBatch(db); // returns batch object [it allows us to attach or write or delete, so on and once all completes it fires and write to db]
    objectsToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase()); // collectionRef has the db from first line 
        // obj.title.toLowerCase() === key of each object(category)
        batch.set(docRef, obj); // add a document using its key (ref) and value will be the object itself
    });

    await batch.commit(); // DONE
}

const getCategoriesAndDocuments = async () => {
    // first we need a collection ref
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef); // object to get a snapshot from
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((a, b) => {
        const {title, items} = b.data();
        a[title.toLowerCase()] = items;
        return a;
    }, {});

    return categoryMap;
}

// create a provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

const auth = getAuth();

const signInWithPrompt = () => signInWithPopup(auth, googleProvider);

const signInWithEmailAndPass = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
} 

const signUserOut = async () => await signOut(auth);

const createUserDocFromAuth = async (userAuth, additionalInfo) => {
    const docRef = doc(db, 'users', userAuth.uid);
    const userDocSnapshot = await getDoc(docRef);
    const userExists = userDocSnapshot.exists();
    // if user doesn't exist
    if(!userExists){
        // create a user doc in db
        const {email, displayName} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(docRef, { 
                email, 
                displayName, 
                createdAt, 
                ...additionalInfo 
            })
        } catch (error) {
            console.log("error login ", error.message)
        }
    }
    // if user exist OR created return docRef of the user
    return docRef;
}

const createUserDocWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);

export default {
    auth,
    signInWithPrompt,
    signInWithEmailAndPass,
    signUserOut,
    onAuthStateChangeListener,
    db,
    createUserDocFromAuth,
    createUserDocWithEmailAndPassword,
    addCollectionAndDocuments,
    getCategoriesAndDocuments,
}