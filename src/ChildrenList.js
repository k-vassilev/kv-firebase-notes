import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const ChildrenList = ({ path, categoryID }) => {
  const query = collection(db, path);

  const [value, loading, error] = useCollection(query);
  const data = [];

  value?.docs.map((doc) => {
    const note = {
      id: doc.id,
      ...doc.data(),
    };
    data.push(note);
  });

  const navigation = useNavigation();

  const Item = ({ item, path }) => (
    <Pressable onPress={() => navigation.navigate("Detail", { item, path })}>
      <View style={styles.noteView}>
        <Text style={styles.noteTitle}>{item.noteTitle}</Text>
        {/* <Text style={styles.noteBody}>{item.noteBody}</Text> */}
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      {loading && <Text>"loading..."</Text>}
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} path={path} />}
        keyExtractor={(item) => item.id}
      />
      {/* <AddNew path={path} /> */}
      <TouchableOpacity
        style={styles.delete}
        onPress={() =>
          navigation.navigate("deleteCategory", { path, categoryID })
        }
      >
        <Entypo name="minus" size={45} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("addNote", { path })}
      >
        <Entypo name="plus" size={45} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ChildrenList;

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
  button: {
    position: "absolute",
    bottom: 60,
    right: 30,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    elevation: 7,
  },
  delete: {
    position: "absolute",
    bottom: 60,
    left: 30,
    backgroundColor: "red",
    borderRadius: 50,
    padding: 10,
    elevation: 7,
  },
});
