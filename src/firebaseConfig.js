// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlVEqQ6XR2HXaVwvSL1I6Lzlo5WnmJ5c0",
  authDomain: "task-list-proyecto-ada-2022.firebaseapp.com",
  projectId: "task-list-proyecto-ada-2022",
  storageBucket: "task-list-proyecto-ada-2022.appspot.com",
  messagingSenderId: "285678639441",
  appId: "1:285678639441:web:b61323606923cba5a7db70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
