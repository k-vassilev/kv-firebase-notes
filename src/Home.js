import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useFetchNotes from "./customHooks/useFetchNotes";

const Home = () => {
  const navigation = useNavigation();
  const notes = useFetchNotes();

  const renderItem = ({ item }) => (
    <View style={styles.noteView}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteBody}>{item.body}</Text>
    </View>
  );
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
