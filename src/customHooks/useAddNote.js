import { addDoc } from "firebase/firestore";
import { notesRef } from "../../firebaseConfig";

const useAddNote = async (title, body) => {
  await addDoc(notesRef, {
    title: title,
    body: body,
  });
};

export default useAddNote;
