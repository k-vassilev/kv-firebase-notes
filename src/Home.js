import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import useFetchNotes from "../src/customHooks/useFetchNotes";
import NoteCardView from "./NoteCardView";
import { Entypo } from "@expo/vector-icons";

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("addNote")}
      >
        <Entypo name="plus" size={45} color="black" />
      </TouchableOpacity>
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

export default Home;
