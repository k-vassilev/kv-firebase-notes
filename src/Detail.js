import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useUpdateNote from "./customHooks/useUpdateNote";
import useDeleteNote from "./customHooks/useDeleteNote";

const Detail = ({ route }) => {
  const navigation = useNavigation();
  const [body, setBody] = useState(route.params.item.body);
  const [title, setTitle] = useState(route.params.item.title);
  const noteID = route.params.item.id;

  const handleUpdate = async () => {
    useUpdateNote(noteID, title, body);
    navigation.navigate("Home");
  };

  const handleDelete = async () => {
    useDeleteNote(noteID);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
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
    height: 300,
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
