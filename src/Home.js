import { View, Button, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useFetchNotes from "./customHooks/useFetchNotes";
import Note from "./Note";

const Home = () => {
  const navigation = useNavigation();
  const notes = useFetchNotes();

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={Note}
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
});

export default Home;
