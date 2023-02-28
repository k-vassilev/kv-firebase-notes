import { View, StyleSheet } from "react-native";
import ChildrenList from "./ChildrenList";

const NoteList = ({ route }) => {
  const categoryName = route.params.item.categoryName;
  const categoryID = route.params.item.id;

  return (
    <View style={styles.container}>
      <ChildrenList
        path={`categories/${categoryName}/notes`}
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
