import { notesRef } from "../../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const useUpdateNote = async (id) => {
  const docRef = doc(notesRef, id);
  await deleteDoc(docRef);
};

export default useUpdateNote;