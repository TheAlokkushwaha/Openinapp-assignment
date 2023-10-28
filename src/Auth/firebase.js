import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBSZwVRnIsJbK_C4pkQZDW34oDvNqOJfmg",
    authDomain: "openinapp-test-512e2.firebaseapp.com",
    projectId: "openinapp-test-512e2",
    storageBucket: "openinapp-test-512e2.appspot.com",
    messagingSenderId: "1010076549544",
    appId: "1:1010076549544:web:1559b0a5f83b108ff31d9d",
    measurementId: "G-F7ZCQ89VTZ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, GoogleAuthProvider, signInWithPopup };
