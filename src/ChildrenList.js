import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import AddNew from "./AddNew";

const ChildrenList = ({ path }) => {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);
  const navigation = useNavigation();

  const Item = ({ item, path }) => (
    <View style={styles.noteView}>
      <Pressable onPress={() => navigation.navigate("Detail", { item, path })}>
        <Text style={styles.noteTitle}>{item.noteTitle}</Text>
        <Text style={styles.noteBody}>{item.noteBody}</Text>
      </Pressable>
    </View>
  );
  return (
    <View>
      <FlatList
        data={docs}
        renderItem={({ item }) => <Item item={item} path={path} />}
        keyExtractor={(item) => item.id}
      />
      <AddNew path={path} />
    </View>
  );
};

export default ChildrenList;

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
