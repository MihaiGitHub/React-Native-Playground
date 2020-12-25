import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1" },
    { name: "Friend 2" },
    { name: "Friend 3" },
    { name: "Friend 4" },
    { name: "Friend 5" },
    { name: "Friend 6" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={(element) => {
        // element === { item: { name: "Friend 1" }, index: 0 }
        return <Text>{element.item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ListScreen;
