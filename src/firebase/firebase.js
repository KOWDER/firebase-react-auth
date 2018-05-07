import * as firebase from "firebase";

const config = {
  apiKey: "YOUR_APIKEY",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "",
  messagingSenderId: "..."
};

firebase.initializeApp(config);

const auth = firebase.auth();

export { auth };
