import { StyleSheet, View, Text, Pressable } from "react-native";

const ListItem = ({ itemData, deleteValueHandler }) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteValueHandler.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#2a0027",
  },
  pressedItem: {
    opacity: 0.5,
  },
  listText: {
    color: "#f7c5f3",
    padding: 8,
  },
});
