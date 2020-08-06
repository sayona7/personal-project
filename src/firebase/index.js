import firebase from "firebase/app";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyD5AYTDGwwKBg5r4GWgVdW-Gm_jhopQ9mQ",
    authDomain: "personal-veronica.firebaseapp.com",
    databaseURL: "https://personal-veronica.firebaseio.com",
    projectId: "personal-veronica",
    storageBucket: "personal-veronica.appspot.com",
    messagingSenderId: "672243116223",
    appId: "1:672243116223:web:a7c779143ccfb38d897e0a",
    measurementId: "G-SN3HJ01N4K"
  };




firebase.initializeApp(config);

const storage = firebase.storage();

export {
  storage, firebase as default
}

