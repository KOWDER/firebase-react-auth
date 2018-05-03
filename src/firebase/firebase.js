import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB2ZAIZ3xv09aNAjh2IdLgMOuArkux2FU0",
  authDomain: "auth-react-275e1.firebaseapp.com",
  databaseURL: "https://auth-react-275e1.firebaseio.com",
  projectId: "auth-react-275e1",
  storageBucket: "",
  messagingSenderId: "218908481822"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export { auth };
