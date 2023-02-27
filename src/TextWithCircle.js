import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TextWithCircle = ({ text, number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.circle}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TextWithCircle;
