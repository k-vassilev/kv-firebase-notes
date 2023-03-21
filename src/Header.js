import { View, Text } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={{ margin: 15 }}>
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
