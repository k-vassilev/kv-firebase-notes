import { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getDocs } from "firebase/firestore";
import { notesRef } from "../firebaseConfig";

const Home = () => {
  const navigation = useNavigation();
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
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.noteView}>
        <Pressable onPress={() => navigation.navigate("Detail", { item })}>
          <Text style={styles.noteTitle}>{item.title}</Text>
          <Text style={styles.noteBody}>{item.body}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Add Notes"
        onPress={() => navigation.navigate("addNote")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9f5d9",
  },
  noteView: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
    alignItems: "center",
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  noteBody: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Home;
