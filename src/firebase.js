// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore,collection, addDoc  } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4deDYwBmuRrNZDZxp1VuOJUEWt0K7sGc",
  authDomain: "jewelry3-c622e.firebaseapp.com",
  projectId: "jewelry3-c622e",
  storageBucket: "jewelry3-c622e.appspot.com",
  messagingSenderId: "406757009778",
  appId: "1:406757009778:web:029e0c5f489c3f8b48d5eb"
};

/*
function confirmBuy(){
  try {
    const docRef = addDoc(collection(db, "Bill"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
} */





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  db
}