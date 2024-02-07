import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDizvNHlu8EdAJC3yeR1KiFT7Ra6TriYrU",
    authDomain: "new-homepage-fe120.firebaseapp.com",
    projectId: "new-homepage-fe120",
    storageBucket: "new-homepage-fe120.appspot.com",
    messagingSenderId: "712704037157",
    appId: "1:712704037157:web:71fe40a67b2bda2955cacc",
    measurementId: "G-WWMMKM1PY3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)