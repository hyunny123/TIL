import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const ListInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (enteredText) => {
    //console.log(enteredText);
    setInputValue(enteredText);
  };

  const addValueHandler = () => {
    props.addValueHandler(inputValue);
    setInputValue(""); //input창 비우기
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="할일 적기 "
          onChangeText={inputHandler}
          value={inputValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="추가" onPress={addValueHandler} />
          </View>
          <View style={styles.button}>
            <Button title="취소" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ListInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
