import { View, Button, FlatList, StyleSheet } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import useFetchNotes from "../src/customHooks/useFetchNotes";
import NoteCardView from "./NoteCardView";

const Home = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const notes = useFetchNotes(isFocused);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <NoteCardView item={item} navigation={navigation} />
        )}
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
