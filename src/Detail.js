import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { notesRef } from "../firebaseConfig";

const Detail = ({ route }) => {
  const navigation = useNavigation();
  const [body, setBody] = useState(route.params.item.body);
  const [title, setTitle] = useState(route.params.item.title);

  const handleUpdate = async () => {
    const docRef = doc(notesRef, route.params.item.id);
    await updateDoc(docRef, {
      title,
      body,
    });
    navigation.navigate("Home");
  };

  const handleDelete = async () => {
    const docRef = doc(notesRef, route.params.item.id);
    await deleteDoc(docRef);
    navigation.navigate("Home");
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="Note"
        value={body}
        onChangeText={(text) => setBody(text)}
        style={styles.inputBody}
        multiline={true}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#c9f5d9",
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: "97%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputBody: {
    fontSize: 18,
    heigth: 300,
    width: "97%",
    borderColor: "gray",
    borderWidth: 1 / 2,
    borderRadius: 5,
    padding: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "97%",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
