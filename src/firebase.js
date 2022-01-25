import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtJYr-aFr_RCEdgFjlmU2Bk5Q02BWBTso",
    authDomain: "fir-todo-all.firebaseapp.com",
    projectId: "fir-todo-all",
    storageBucket: "fir-todo-all.appspot.com",
    messagingSenderId: "635127669135",
    appId: "1:635127669135:web:d721473b20828b3c842bfa",
    measurementId: "G-GQ6TG3HRZE"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };