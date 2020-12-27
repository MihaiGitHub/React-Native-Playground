import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 22 },
    { name: "Friend 3", age: 23 },
    { name: "Friend 4", age: 24 },
    { name: "Friend 5", age: 25 },
    { name: "Friend 6", age: 28 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={(element) => {
        // element === { item: { name: "Friend 1" }, index: 0 }
        return (
          <Text style={styles.textStyle}>
            {element.item.name} - Age {element.item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
