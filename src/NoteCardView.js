import { View, Text, StyleSheet, Pressable } from "react-native";

const NoteCardView = ({ item, navigation }) => {
  return (
    <View style={styles.noteView}>
      <Pressable onPress={() => navigation.navigate("Detail", { item })}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteBody}>{item.body}</Text>
      </Pressable>
    </View>
  );
};

export default NoteCardView;

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
