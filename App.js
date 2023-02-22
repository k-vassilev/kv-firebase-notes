import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import useFetchNotes from "./src/customHooks/useFetchNotes";
import useAddNewNote from "./src/customHooks/useAddNote";

export default function App() {
  const notes = useFetchNotes();
  console.log("notes be like", notes);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Add Note"
        onPress={() => useAddNewNote("title 3", "body 3")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
