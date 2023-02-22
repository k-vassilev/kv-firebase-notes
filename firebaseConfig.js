import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseConfig } from "./keys";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesRef = collection(db, "notes");
