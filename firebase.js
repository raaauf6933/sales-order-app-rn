// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ3_SzcHZGzGiSZ61BEBvhRVqfMHT-G1s",
  authDomain: "sales-order-app-c29dc.firebaseapp.com",
  projectId: "sales-order-app-c29dc",
  storageBucket: "sales-order-app-c29dc.appspot.com",
  messagingSenderId: "937838039665",
  appId: "1:937838039665:web:f5f1deb743eb49eb9d41d0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
