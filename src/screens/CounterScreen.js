import React from "react";
import { Text, StyleSheet } from "react-native";

const CounterScreen = () => {
  return <Text style={styles.textStyle}>This is the counter screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CounterScreen;
