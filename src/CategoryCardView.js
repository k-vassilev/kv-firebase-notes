import { View, Text, StyleSheet, Pressable } from "react-native";
import { db } from "../firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import TextWithCircle from "./TextWithCircle";

const CategoryCardView = ({ item, navigation }) => {
  const categoryName = item.categoryName;
  const path = `categories/${categoryName}/notes`;
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);
  const numberOfNotes = docs?.length;

  return (
    <View style={styles.noteView}>
      <Pressable onPress={() => navigation.navigate("NoteList", { item })}>
        <TextWithCircle text={item.categoryName} number={numberOfNotes} />
      </Pressable>
    </View>
  );
};

export default CategoryCardView;

const styles = StyleSheet.create({
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
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  noteBody: {
    fontSize: 16,
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
