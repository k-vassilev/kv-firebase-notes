import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./src/Home";
import AddNote from "./src/AddNote";
import Header from "./src/Header";
import Detail from "./src/Detail";
import NoteList from "./src/NoteList";
import AddCategory from "./src/AddCategory";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          name="Home"
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
