import { notesRef } from "../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const useUpdateNote = async (id, title, body, categoryPath) => {
  console.log("useUpdateNote");
  const notesRef = collection(db, categoryPath);
  const docRef = doc(notesRef, id);
  await updateDoc(docRef, {
    title,
    body,
  });
};

export default useUpdateNote;
