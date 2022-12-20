import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Butto, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Welcome!</Text>
      <Text
        style={{ margin: 15, borderWidth: 2, borderColor: "blue", padding: 15 }}
      >
        go to detail
      </Text>
      <Button title="Tap ME!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: "blue",
  },
});
