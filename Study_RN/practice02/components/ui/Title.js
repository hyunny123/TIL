import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary700,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary700,
    padding: 14,
  },
});
