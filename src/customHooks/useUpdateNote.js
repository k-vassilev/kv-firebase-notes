import { notesRef } from "../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const useUpdateNote = async (id, title, body) => {
  const docRef = doc(notesRef, id);
  await updateDoc(docRef, {
    title,
    body,
  });
};

export default useUpdateNote;
