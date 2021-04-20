import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAno5XqTUPjR8nc000wf7grAoB4KoPGVGM",
  authDomain: "crwn-db-d91c5.firebaseapp.com",
  projectId: "crwn-db-d91c5",
  storageBucket: "crwn-db-d91c5.appspot.com",
  messagingSenderId: "14116624716",
  appId: "1:14116624716:web:9021dea557c69d873217e9",
  measurementId: "G-XJ3BQV0SW1"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {return;}

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;