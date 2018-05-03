import { auth } from "./firebase";

// sign up method
export const doCreateUserWithEmailAndPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
}

// sign in method
export const doSignInUserWithEmailAndPassword = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
}

// sign out method
export const doSignOut = () => {
  auth.signOut();
}