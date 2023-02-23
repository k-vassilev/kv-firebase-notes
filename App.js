import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Home";
import AddNote from "./src/AddNote";
import Header from "./src/Header";
import Detail from "./src/Detail";

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
            headerStyle: {
              backgroundColor: "purple",
              height: 120,
            },
          }}
        />
        <Stack.Screen
          component={AddNote}
          name="addNote"
          options={{
            headerTitle: () => <Header title="Add Note" />,
            headerStyle: {
              backgroundColor: "purple",
              height: 120,
            },
          }}
        />
        <Stack.Screen
          component={Detail}
          name="Detail"
          options={{
            headerTitle: () => <Header title="Edit Note" />,
            headerStyle: {
              backgroundColor: "purple",
              height: 120,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
