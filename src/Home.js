import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import {
  useCollectionData,
  useCollection,
} from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import CategoryCardView from "./CategoryCardView";

const Home = () => {
  const navigation = useNavigation();
  const query = collection(db, "categories/");
  // const [docs, loading, error] = useCollectionData(query);
  const [value, load, err] = useCollection(query);

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
      {load && <Text>"loading..."</Text>}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryCardView item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("addCategory")}
      >
        <Entypo name="plus" size={45} color="black" />
      </TouchableOpacity>
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
