import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { notesRef } from "../../firebaseConfig";

const useFetchNotes = (isFocused) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const notesCollection = [];
      const querySnapshot = await getDocs(notesRef);

      querySnapshot.forEach((doc) => {
        const { title, body } = doc.data();
        notesCollection.push({ title, body, id: doc.id });
      });

      setNotes(notesCollection);
    };

    fetchNotes();
  }, [isFocused]);

  return notes;
};

export default useFetchNotes;
