import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYN41awH4iEwo_eZ6eY6qyMRYB4UFD9mc",
  authDomain: "order-d84f9.firebaseapp.com",
  projectId: "order-d84f9",
  storageBucket: "order-d84f9.appspot.com",
  messagingSenderId: "966926721546",
  appId: "1:966926721546:web:c5f443820b68a8ff6db5f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }