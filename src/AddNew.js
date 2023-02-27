import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { db } from "../firebaseConfig";
import { doc, setDoc, addDoc } from "firebase/firestore";

const AddNew = ({ path }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddNote = async () => {
    const docRef = doc(db, path, title);
    await setDoc(docRef, { noteTitle: title, noteBody: body });
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={(text) => setBody(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9f5d9",
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: "97%",
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    padding: 10,
  },
  inputBody: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    height: 150,
    width: "97%",
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    padding: 10,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 10,
    marginTop: 5,
    height: 55,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
    shadowColor: "blue",
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
