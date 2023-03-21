import React from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import * as ImagePicker from "expo-image-picker";

console.log("Note Taking Screen");

const NoteTakingScreen = () => {
  const richText = React.useRef();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    const imageMime = result.assets[0];
    const base64String = result.assets[0].base64;

    if (!result.canceled) {
      const str = `data:${imageMime};base64,${base64String}`;
      richText.current.insertImage(str);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Text>Description:</Text>
          <RichEditor
            ref={richText}
            onChange={(descriptionText) => {
              // console.log("descriptionText:", descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <View style={styles.toolbar}>
        <RichToolbar
          editor={richText}
          actions={[
            actions.insertImage,
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
            actions.keyboard,
            actions.setStrikethrough,
            actions.setUnderline,
            actions.removeFormat,
            actions.insertVideo,
            actions.checkboxList,
            actions.undo,
            actions.redo,
          ]}
          onPressAddImage={() => {
            pickImage();
          }}
          iconMap={{
            [actions.heading1]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H1</Text>
            ),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NoteTakingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    position: "absolute",
    bottom: 0,
  },
});
