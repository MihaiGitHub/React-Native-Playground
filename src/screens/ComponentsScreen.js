// import entire react library
import React from 'react';
// import only text and stylesheet pieces of the react native library
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is the components screen</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;