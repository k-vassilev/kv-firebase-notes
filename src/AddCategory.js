import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const navigation = useNavigation();

  const handleAddNote = async () => {
    if (auth.currentUser) {
      const userId = auth.currentUser?.uid;
      const paths = `users/${userId}/categories`;
      const docRef = doc(db, paths, categoryName);
      await setDoc(docRef, { categoryName, id: categoryName });
      navigation.navigate("Home");
    }
    console.log("AddCategory");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputTitle}
        placeholder="Category Name"
        value={categoryName}
        onChangeText={(text) => setCategoryName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCategory;

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
