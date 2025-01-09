import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';

type ButtonProp = {
  handlePress: () => void;
  text: string;
};
const Button = ({ handlePress, text }: ButtonProp) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 4,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowColor: '#3333333d',
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
      default: {
        height: 500,
      },
    }),
  },
  text: {
    fontFamily: 'Poppins',
  },
});
