import { addDoc } from "firebase/firestore";
import { notesRef } from "../../firebaseConfig";

const useAddNewNote = async (title, body) => {
  await addDoc(notesRef, {
    title: title,
    body: body,
  });
};

export default useAddNewNote;
