import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyANU9F5rwWo9S6xucGvmxF5lm-MyjwXTto",
	authDomain: "vueeee-tmy.firebaseapp.com",
	databaseURL: "https://vueeee-tmy-default-rtdb.firebaseio.com",
	projectId: "vueeee-tmy",
	storageBucket: "vueeee-tmy.appspot.com",
	messagingSenderId: "1094212795494",
	appId: "1:1094212795494:web:02266ef85c8a05262641a7"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
const auth = getAuth(fb);
const db = getFirestore(fb);

export {fb,db,auth}