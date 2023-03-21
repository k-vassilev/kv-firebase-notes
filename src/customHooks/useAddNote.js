import { addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const useAddNote = async (title, body, path) => {
  const notesRef = collection(db, path);
  await addDoc(notesRef, {
    noteTitle: title,
    noteBody: body,
  });
};

export default useAddNote;
