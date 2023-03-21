import { View, StyleSheet } from "react-native";
import ChildrenList from "./ChildrenList";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const NoteList = ({ route }) => {
  const userId = auth.currentUser?.uid;

  const categoryName = route.params.item.categoryName;
  const categoryID = route.params.item.id;
  console.log("Note List");

  return (
    <View style={styles.container}>
      <ChildrenList
        path={`users/${userId}/categories/${categoryName}/notes`}
        categoryID={categoryID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9f5d9",
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
});

export default NoteList;
