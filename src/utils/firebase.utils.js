// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } 
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


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

///FireStore below

export const db = getFirestore(); //directly points to database inside our console


// take data from auth and store it inside firestore
export const createUserDocumentFromAuth = async(userAuth) => {
    // check if user doc is present
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
                createdAt
            });
        }catch(error){
            console.log("Error creating the user", error.message);
        }
    }

    return userDocRef;
}