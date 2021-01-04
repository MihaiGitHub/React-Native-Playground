import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SquareScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the square screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;
