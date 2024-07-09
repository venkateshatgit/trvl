// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} 
from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4W-NfEEwn4pgzxleXlvIpNKHsZ91iJZc",
    authDomain: "crwn-clone-db011.firebaseapp.com",
    projectId: "crwn-clone-db011",
    storageBucket: "crwn-clone-db011.appspot.com",
    messagingSenderId: "788587915199",
    appId: "1:788587915199:web:edf1cd16aaefd6a7c6a30a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);




///FireStore below

export const db = getFirestore(); //directly points to database inside our console


// take data from auth and store it inside firestore
export const createUserDocumentFromAuth = async(userAuth, ...otherProps) => {
    // check if user doc is present
    if(!userAuth)
        return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...otherProps
            });
        }catch(error){
            console.log("Error creating the user", error.message);
        }
    }
    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    // const res = await getAuth(auth);
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // console.log(userCredential)
        // const userDocRef = doc(db, "users", userCredential.user.uid);
        // const userDoc = await getDoc(userDocRef);
        // console.log(userDoc)
        return userCredential;
    }catch (error) {
        switch(error.code){
            case "auth/invalid-credential":
                alert("Invalid credential entered, check email and password");
            default:
                console.error("Error signing in with email and password", error);
        }  
    }
}


export const signOutUser = async () => await signOut(auth);


export const onAuthStateChangedListner = (callback) => {
    onAuthStateChanged(auth, callback);
}