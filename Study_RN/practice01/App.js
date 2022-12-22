import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [listInputValue, setListInputValue] = useState([]);

  //모달열기
  const startAddHandler = () => {
    setModalIsVisible(true);
  };
  //모달닫기
  const endAddHandler = () => {
    setModalIsVisible(false);
  };

  const addValueHandler = (inputValue) => {
    setListInputValue((currentListInputValue) => [
      ...currentListInputValue,
      { text: inputValue, id: Math.random().toString() },
    ]);
    endAddHandler();
  };

  const deleteValueHandler = (id) => {
    setListInputValue((currentListInputValue) => {
      return currentListInputValue.filter((i) => i.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="새로운 할일 추가"
        color="#2a0027"
        onPress={startAddHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        addValueHandler={addValueHandler}
        onCancel={endAddHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={listInputValue}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                deleteValueHandler={deleteValueHandler}
                id={itemData}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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

  listContainer: {
    flex: 4,
  },
});
