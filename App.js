import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Button } from "react-native";
import Home from "./src/Home";
import AddNote from "./src/AddNote";
import Header from "./src/Header";
import Detail from "./src/Detail";
import NoteList from "./src/NoteList";
import AddCategory from "./src/AddCategory";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import DeleteCategory from "./src/DeleteCategory";
import NoteTakingScreen from "./src/NoteTakingScreen";
import LoginScreen from "./src/LoginScreen";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const auth = getAuth();

function Main() {
  const navigation = useNavigation();
  const exit = () =>
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={`SignOut from: ${auth.currentUser?.email}`}
          onPress={exit}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Add new category" component={AddCategory} />
      <Drawer.Screen name="Quill JS" component={NoteTakingScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={LoginScreen}
          name="Login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Main}
          name="Main"
          options={{
            headerTitle: () => <Header title="Notes" />,
            headerStyle: styles.headerStyles,
          }}
        />
        <Stack.Screen
          component={AddNote}
          name="addNote"
          options={{
            headerTitle: () => <Header title="Add Note" />,
            headerStyle: styles.headerStyles,
          }}
        />
        <Stack.Screen
          component={Detail}
          name="Detail"
          options={{
            headerTitle: () => <Header title="Edit Note" />,
            headerStyle: styles.headerStyles,
          }}
        />
        <Stack.Screen
          component={NoteList}
          name="NoteList"
          options={{
            headerTitle: () => <Header title="View Category" />,
            headerStyle: styles.headerStyles,
          }}
        />
        <Stack.Screen
          component={AddCategory}
          name="addCategory"
          options={{
            headerTitle: () => <Header title="Add Category" />,
            headerStyle: styles.headerStyles,
          }}
        />
        <Stack.Screen
          component={DeleteCategory}
          name="deleteCategory"
          options={{
            headerTitle: () => <Header title="Delete Category" />,
            headerStyle: styles.headerStyles,
          }}
        />
        <Stack.Screen
          component={NoteTakingScreen}
          name="quill"
          options={{
            headerTitle: () => <Header title="Editor" />,
            headerStyle: styles.headerStyles,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: "purple",
    height: 120,
  },
});
