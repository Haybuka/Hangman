import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

type ButtonProp = {
  handlePress: () => void;
  text: string;
};
const Button = ({ handlePress, text }: ButtonProp) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    elevation: 4,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 4,
  },
});
