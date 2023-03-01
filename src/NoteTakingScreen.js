import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  TextInput,
} from "react-native";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function NoteTakingScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [editorHtml, setEditorHtml] = useState("");

  const path = "categories/cats/notes";

  const _editor = React.createRef();

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const handleAdd = async () => {
    const docRef = doc(db, path, title);
    await setDoc(docRef, { noteTitle: title, noteBody: editorHtml });
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      <TextInput
        style={styles.inputTitle}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <QuillEditor
        style={styles.editor}
        ref={_editor}
        initialHtml=""
        onHtmlChange={handleEditorChange}
      />
      <QuillToolbar editor={_editor} options="full" theme="light" />
      <Button title="Add" onPress={handleAdd} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 10,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#eaeaea",
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: "white",
  },
});
