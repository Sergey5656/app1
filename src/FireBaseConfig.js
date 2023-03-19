import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDKIDwxIHsg6xHbmbDfhhMwj3geQBtpj_E",
    authDomain: "app1-f3dea.firebaseapp.com",
    projectId: "app1-f3dea",
    storageBucket: "app1-f3dea.appspot.com",
    messagingSenderId: "387893820386",
    appId: "1:387893820386:web:b69badde9a36b71e8d57bb"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };