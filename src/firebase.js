import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtb2vHEU8-eUroPy13hJZMSI_0aQuCuzA",
  authDomain: "loftydreams-307f2.firebaseapp.com",
  projectId: "loftydreams-307f2",
  storageBucket: "loftydreams-307f2.appspot.com",
  messagingSenderId: "804395502001",
  appId: "1:804395502001:web:a442d87e2887eedff09590",
  measurementId: "G-L3LTNDTJ48",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
