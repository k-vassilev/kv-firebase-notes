import { addDoc } from "firebase/firestore";
import { notesRef } from "../../firebaseConfig";
import { db } from "../../firebaseConfig";
import { collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const useAddNote = async (title, body, path) => {
  const userId = auth.currentUser?.uid;
  const userPath = `users/${userId}/${path}`;
  console.log("useAddNote");
  const notesRef = collection(db, path);
  await addDoc(notesRef, {
    noteTitle: title,
    noteBody: body,
  });
};

export default useAddNote;
