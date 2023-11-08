import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyApB3lBM5JuBSYPqE1-buTUO3CBJVkO58c",
    authDomain: "fir-auth-f9d62.firebaseapp.com",
    databaseURL: "https://fir-auth-f9d62-default-rtdb.firebaseio.com",
    projectId: "fir-auth-f9d62",
    storageBucket: "fir-auth-f9d62.appspot.com",
    messagingSenderId: "510927265017",
    appId: "1:510927265017:web:06837561e491539a809628",
    measurementId: "G-TPL7F20F5W"
};
firebase.initializeApp(firebaseConfig);
export default firebase;