
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuDgrtXfwP0WL5yb86YCVYqQ-fFnT8144",
  authDomain: "viniport-9ea97.firebaseapp.com",
  projectId: "viniport-9ea97",
  storageBucket: "viniport-9ea97.firebasestorage.app",
  messagingSenderId: "741591013825",
  appId: "1:741591013825:web:1b93124a22ddd2104f3740",
  measurementId: "G-4Y3V711FWB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
