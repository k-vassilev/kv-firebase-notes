import { addDoc } from "firebase/firestore";
import { notesRef } from "../../firebaseConfig";
import { db } from "../../firebaseConfig";
import { collection } from "firebase/firestore";

const useAddNote = async (title, body, path) => {
  const notesRef = collection(db, path);
  await addDoc(notesRef, {
    noteTitle: title,
    noteBody: body,
  });
};

export default useAddNote;
