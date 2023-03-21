import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import CategoryCardView from "./CategoryCardView";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const Home = () => {
  const navigation = useNavigation();

  const userId = auth.currentUser?.uid;
  const paths = `users/${userId}/categories/`;

  const query = collection(db, paths);
  const [value, loading, err] = useCollection(query);

  const data = [];

  value?.docs.map((doc) => {
    const category = {
      id: doc.id,
      ...doc.data(),
    };
    data.push(category);
  });

  return (
    <View style={styles.container}>
      {loading && <Text>"loading..."</Text>}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryCardView item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
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
