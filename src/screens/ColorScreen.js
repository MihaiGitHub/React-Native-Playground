import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the color screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ColorScreen;
