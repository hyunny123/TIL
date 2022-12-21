import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [listInputValue, setListInputValue] = useState([]);

  const inputHandler = (enteredText) => {
    //console.log(enteredText);
    setInputValue(enteredText);
  };
  const addValueHandler = () => {
    setListInputValue((currentListInputValue) => [
      ...currentListInputValue,
      { text: inputValue, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="할일 적기 "
          onChangeText={inputHandler}
        />
        <Button style={styles.addBtn} title="추가" onPress={addValueHandler} />
      </View>
      <View style={styles.listContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          <Text>목표 리스트</Text>
          {listInputValue.map((i) => (
            <View style={styles.listItem} key={i}>
              <Text style={styles.listText}>{i}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={listInputValue}
          renderItem={(itemData) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.listText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
        {/* <Text>목표 리스트</Text>
          <View style={styles.listItem} key={i}>
            <Text style={styles.listText}>{i}</Text>
          </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 4,
  },
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#2a0027",
    color: "#f7c5f3",
  },
  listText: {
    color: "#f7c5f3",
  },
});
