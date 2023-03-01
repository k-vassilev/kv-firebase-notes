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
import { doc, setDoc, deleteDoc } from "firebase/firestore";

const DeleteCategory = ({ route }) => {
  const navigation = useNavigation();

  const docRef = route.params.categoryID;

  const handleDelete = async () => {
    await deleteDoc(doc(db, "categories", docRef));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete {docRef}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteCategory;

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